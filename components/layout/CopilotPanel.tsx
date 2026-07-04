"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, PanelRightClose, PanelRightOpen } from "lucide-react";
import { ChatMessage } from "@/lib/types";
import { initialChat, suggestedPrompts } from "@/lib/mock-data";
import { ChatMessageBubble, TypingIndicator } from "@/components/copilot/ChatMessage";
import { SuggestedPrompts } from "@/components/copilot/SuggestedPrompts";
import { Button } from "@/components/ui/button";

// Mocked response generator — the real backend will replace this with an
// actual model call that reasons over live inventory data.
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

export function CopilotPanel({ variant = "pinned" }: { variant?: "pinned" | "hero" }) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
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

    // Simulated latency for the mock assistant reply.
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, buildAssistantResponse(trimmed)]);
    }, 1100);
  }

  if (collapsed) {
    return (
      <div className="hidden lg:flex w-12 shrink-0 border-l border-border bg-surface flex-col items-center py-4">
        <button
          onClick={() => setCollapsed(false)}
          className="h-8 w-8 rounded-md flex items-center justify-center text-ink-muted hover:bg-gray-100 hover:text-ink"
          aria-label="Expand AI Copilot"
        >
          <PanelRightOpen className="h-4 w-4" />
        </button>
        <div className="mt-4 h-7 w-7 rounded-full bg-primary flex items-center justify-center">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        variant === "pinned"
          ? "hidden lg:flex w-[380px] shrink-0 border-l border-border bg-surface flex-col h-full"
          : "flex flex-col h-full"
      }
    >
      {variant === "pinned" && (
        <div className="flex items-center justify-between px-4 h-16 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-ink">Copilot</span>
          </div>
          <button
            onClick={() => setCollapsed(true)}
            className="h-8 w-8 rounded-md flex items-center justify-center text-ink-muted hover:bg-gray-100 hover:text-ink"
            aria-label="Collapse AI Copilot"
          >
            <PanelRightClose className="h-4 w-4" />
          </button>
        </div>
      )}

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-thin px-4 py-4 space-y-4"
      >
        {messages.map((message) => (
          <ChatMessageBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}

        {messages.length === 1 && (
          <div className="pt-1">
            <p className="text-xs font-medium text-ink-muted mb-2">
              Suggested prompts
            </p>
            <SuggestedPrompts prompts={suggestedPrompts} onSelect={handleSend} />
          </div>
        )}
      </div>

      <div className="p-3 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about inventory, demand, or transfers..."
            className="flex-1 h-10 rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <Button type="submit" size="icon" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
