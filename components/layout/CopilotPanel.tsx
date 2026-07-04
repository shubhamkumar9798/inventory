"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { ChatMessage } from "@/lib/types";
import { initialChat, suggestedPrompts } from "@/lib/mock-data";
import {
  ChatMessageBubble,
  TypingIndicator,
} from "@/components/copilot/ChatMessage";
import { SuggestedPrompts } from "@/components/copilot/SuggestedPrompts";
import { Button } from "@/components/ui/button";

function buildAssistantResponse(prompt: string): ChatMessage {
  const now = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    text: `Here's what I found for "${prompt}"`,
    timestamp: now,
    insight: {
      title: "Revenue at Risk",
      metricLabel: "Revenue at Risk",
      metricValue: "₹4.8M",
      reason:
        "Demand is exceeding available inventory in Chennai and Bangalore.",
      recommendation: "Transfer 120 units from Hyderabad warehouse.",
      confidence: 94,
      estimatedSavings: "₹1.2M",
    },
  };
}

export function CopilotPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  function handleSend(text: string) {
    const trimmed = text.trim();

    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        buildAssistantResponse(trimmed),
      ]);
    }, 1000);
  }

  return (
    <div className="flex h-full flex-col bg-background">

      {/* Header */}

      <div className="border-b border-border bg-white px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Inventory Intelligence Copilot
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Ask questions about inventory, stockouts, transfers,
              replenishment, forecasting, revenue risk and AI-powered
              recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Chat */}

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-8 py-8"
      >
        <div className="mx-auto max-w-5xl space-y-6">

          {messages.map((message) => (
            <ChatMessageBubble
              key={message.id}
              message={message}
            />
          ))}

          {isTyping && <TypingIndicator />}

          {messages.length === 1 && (
            <div className="space-y-4">

              <h3 className="text-lg font-semibold">
                Suggested Questions
              </h3>

              <SuggestedPrompts
                prompts={suggestedPrompts}
                onSelect={handleSend}
              />

            </div>
          )}
        </div>
      </div>

      {/* Input */}

      <div className="border-t border-border bg-white px-8 py-5">

        <div className="mx-auto max-w-5xl">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Inventory Copilot anything..."
              className="h-14 flex-1 rounded-xl border border-border bg-background px-5 text-sm outline-none transition focus:ring-2 focus:ring-primary/30"
            />

            <Button
              type="submit"
              size="lg"
              className="h-14 w-14 rounded-xl"
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}