import { Sparkles } from "lucide-react";
import { kpis, recommendations } from "@/lib/mock-data";
import { KPICard } from "@/components/dashboard/KPICard";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";

export default function OverviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">
      <section className="rounded-lg border border-border bg-surface p-6 shadow-soft">
        <div className="flex items-center gap-2 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Executive Summary — Generated 7:45 AM
        </div>
        <h1 className="mt-2 text-xl font-semibold text-ink leading-snug">
          Good morning. Revenue at risk is ₹4.8M today, concentrated in
          electronics across Chennai and Bangalore.
        </h1>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
          I've reviewed inventory across all 12 stores overnight. Four
          recommendations below could recover ₹7.3M and reduce stockout
          exposure this week. Ask me anything in the Copilot panel for the
          full reasoning.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-ink">Today's Overview</h2>
          <span className="text-xs text-ink-muted">Updated 12 min ago</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.id} kpi={kpi} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-ink">
            Today's Recommendations
          </h2>
          <span className="text-xs text-ink-muted">
            {recommendations.length} actions available
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.id} rec={rec} />
          ))}
        </div>
      </section>
    </div>
  );
}
