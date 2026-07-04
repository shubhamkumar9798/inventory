import { inventoryItems } from "@/lib/mock-data";
import { InventoryTable } from "@/components/inventory/InventoryTable";

export default function InventoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-ink">Inventory</h1>
        <p className="text-sm text-ink-muted mt-1">
          Live inventory position across all stores. Select a row to ask the
          Copilot for a deeper explanation.
        </p>
      </div>
      <InventoryTable data={inventoryItems} />
    </div>
  );
}
