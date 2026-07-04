import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const transfers = [
  { id: "TR-2291", product: "4K Smart TV 55\"", from: "Hyderabad Warehouse", to: "Chennai Central", units: 80, status: "In Transit", eta: "Tomorrow" },
  { id: "TR-2288", product: "Wireless Earbuds Pro", from: "Chennai OMR", to: "Bangalore Koramangala", units: 40, status: "Pending Approval", eta: "—" },
  { id: "TR-2280", product: "Laptop 14\" i5", from: "Pune Warehouse", to: "Bangalore Koramangala", units: 15, status: "Completed", eta: "Delivered" },
];

const statusVariant: Record<string, "success" | "warning" | "accent"> = {
  "In Transit": "accent",
  "Pending Approval": "warning",
  Completed: "success",
};

export default function TransfersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-ink">Transfers</h1>
        <p className="text-sm text-ink-muted mt-1">
          Inventory movements recommended and initiated by the Copilot.
        </p>
      </div>

      <div className="space-y-3">
        {transfers.map((t) => (
          <div
            key={t.id}
            className="rounded-lg border border-border bg-surface p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-ink-muted">{t.id}</span>
              <Badge variant={statusVariant[t.status]}>{t.status}</Badge>
            </div>
            <h3 className="mt-1 text-sm font-semibold text-ink">{t.product}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-ink-muted">
              <span>{t.from}</span>
              <ArrowRight className="h-3.5 w-3.5" />
              <span>{t.to}</span>
              <span className="ml-2 font-medium text-ink">{t.units} units</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-ink-muted">ETA: {t.eta}</span>
              <Button size="sm" variant="secondary">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
