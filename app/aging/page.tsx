import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

const aging = [
  { product: "Men's Winter Jacket", store: "Pune Camp", ageDays: 118, value: 1240000, band: "90+ days" },
  { product: "Women's Winter Jacket", store: "Hyderabad Banjara Hills", ageDays: 104, value: 980000, band: "90+ days" },
  { product: "Festive Décor Set", store: "Chennai OMR", ageDays: 76, value: 320000, band: "60-90 days" },
  { product: "Summer Sandals", store: "Bangalore Koramangala", ageDays: 52, value: 210000, band: "30-60 days" },
];

const bandVariant: Record<string, "danger" | "warning" | "accent"> = {
  "90+ days": "danger",
  "60-90 days": "warning",
  "30-60 days": "accent",
};

export default function AgingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-ink">Inventory Aging</h1>
        <p className="text-sm text-ink-muted mt-1">
          Stock tying up working capital, ranked by age.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-surface shadow-soft divide-y divide-border">
        {aging.map((item) => (
          <div key={item.product} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-ink">{item.product}</p>
              <p className="text-xs text-ink-muted mt-0.5">{item.store}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-ink-muted">{item.ageDays} days</span>
              <span className="text-sm font-semibold text-ink">
                {formatCurrency(item.value)}
              </span>
              <Badge variant={bandVariant[item.band]}>{item.band}</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
