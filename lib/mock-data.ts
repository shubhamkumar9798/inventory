import {
  ChatMessage,
  InventoryItem,
  KPI,
  NoticeItem,
  Recommendation,
  ReportSummary,
} from "./types";

export const kpis: KPI[] = [
  {
    id: "revenue-at-risk",
    label: "Revenue at Risk",
    value: "₹4.8M",
    trend: 12.4,
    trendData: [2.1, 2.4, 2.9, 3.2, 3.8, 4.1, 4.8],
    status: "risk",
    explanation: {
      why: "Most revenue risk comes from high-demand electronics in Chennai and Bangalore stores.",
      action: "Replenish inventory within 48 hours to avoid stockouts.",
    },
  },
  {
    id: "inventory-health",
    label: "Inventory Health",
    value: "82%",
    trend: -3.1,
    trendData: [88, 87, 86, 85, 84, 83, 82],
    status: "watch",
    explanation: {
      why: "Health has drifted down as 14 SKUs crossed into the low-cover band this week.",
      action: "Review the low-cover SKU list and schedule replenishment.",
    },
  },
  {
    id: "stockout-alerts",
    label: "Stockout Alerts",
    value: "23",
    trend: 8.9,
    trendData: [14, 16, 17, 19, 20, 22, 23],
    status: "risk",
    explanation: {
      why: "Stockouts are concentrated in the electronics and personal care categories.",
      action: "Trigger emergency transfers from nearby warehouses.",
    },
  },
  {
    id: "overstock-cost",
    label: "Overstock Cost",
    value: "₹2.1M",
    trend: 4.2,
    trendData: [1.7, 1.8, 1.8, 1.9, 2.0, 2.0, 2.1],
    status: "watch",
    explanation: {
      why: "Seasonal apparel in Pune and Hyderabad is moving slower than forecast.",
      action: "Launch a clearance campaign for aging seasonal SKUs.",
    },
  },
  {
    id: "forecast-accuracy",
    label: "Forecast Accuracy",
    value: "91.3%",
    trend: 1.6,
    trendData: [88, 88.5, 89, 89.8, 90.2, 90.8, 91.3],
    status: "good",
    explanation: {
      why: "Forecast accuracy improved after incorporating last week's promotional calendar.",
      action: "No action needed — model performing within target range.",
    },
  },
];

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    title: "Transfer inventory to Chennai",
    reason: "Demand is exceeding available inventory in Chennai and Bangalore stores.",
    impact: "Prevents an estimated ₹1.2M in lost sales over the next 7 days.",
    priority: "critical",
    confidence: 94,
    estimatedSavings: "₹1.2M",
    primaryAction: "Transfer Inventory",
  },
  {
    id: "rec-2",
    title: "Replenish personal care category",
    reason: "12 SKUs in personal care have fewer than 3 days of cover across South region stores.",
    impact: "Reduces stockout risk for the highest-velocity SKUs in the category.",
    priority: "high",
    confidence: 88,
    estimatedSavings: "₹640K",
    primaryAction: "Replenish Stock",
  },
  {
    id: "rec-3",
    title: "Launch clearance for seasonal apparel",
    reason: "Winter apparel in Pune and Hyderabad has averaged less than 2 units sold per week for 6 weeks.",
    impact: "Frees up ₹2.1M in tied-up working capital ahead of new season stock.",
    priority: "medium",
    confidence: 81,
    estimatedSavings: "₹2.1M",
    primaryAction: "Create Clearance Campaign",
  },
  {
    id: "rec-4",
    title: "Increase safety stock for festive SKUs",
    reason: "Demand simulation shows a 34% probability of stockout during the upcoming festive week.",
    impact: "Protects an estimated ₹3.4M in festive-period revenue.",
    priority: "high",
    confidence: 90,
    estimatedSavings: "₹3.4M",
    primaryAction: "Increase Safety Stock",
  },
];

export const inventoryItems: InventoryItem[] = [
  { sku: "ELX-1042", product: "4K Smart TV 55\"", store: "Chennai Central", inventory: 8, demand: 34, daysOfCover: 1.8, health: "critical", revenueAtRisk: 820000, status: "at-risk" },
  { sku: "ELX-2210", product: "Wireless Earbuds Pro", store: "Bangalore Koramangala", inventory: 15, demand: 52, daysOfCover: 2.1, health: "critical", revenueAtRisk: 410000, status: "at-risk" },
  { sku: "PCR-3305", product: "Face Serum 30ml", store: "Chennai Central", inventory: 22, demand: 40, daysOfCover: 2.6, health: "low", revenueAtRisk: 190000, status: "at-risk" },
  { sku: "APP-4410", product: "Men's Winter Jacket", store: "Pune Camp", inventory: 240, demand: 6, daysOfCover: 58.0, health: "overstock", revenueAtRisk: 0, status: "overstock" },
  { sku: "APP-4411", product: "Women's Winter Jacket", store: "Hyderabad Banjara Hills", inventory: 198, demand: 5, daysOfCover: 61.2, health: "overstock", revenueAtRisk: 0, status: "overstock" },
  { sku: "ELX-1188", product: "Laptop 14\" i5", store: "Bangalore Koramangala", inventory: 5, demand: 18, daysOfCover: 1.4, health: "critical", revenueAtRisk: 950000, status: "stockout" },
  { sku: "GRO-0091", product: "Basmati Rice 5kg", store: "Chennai OMR", inventory: 340, demand: 210, daysOfCover: 8.1, health: "healthy", revenueAtRisk: 0, status: "in-stock" },
  { sku: "PCR-3312", product: "Shampoo 650ml", store: "Hyderabad Banjara Hills", inventory: 60, demand: 45, daysOfCover: 6.7, health: "healthy", revenueAtRisk: 0, status: "in-stock" },
  { sku: "ELX-2255", product: "Bluetooth Speaker", store: "Pune Camp", inventory: 12, demand: 30, daysOfCover: 2.0, health: "low", revenueAtRisk: 260000, status: "at-risk" },
  { sku: "GRO-0140", product: "Cooking Oil 1L", store: "Bangalore Koramangala", inventory: 410, demand: 260, daysOfCover: 7.9, health: "healthy", revenueAtRisk: 0, status: "in-stock" },
];

export const initialChat: ChatMessage[] = [
  {
    id: "msg-1",
    role: "assistant",
    text: "Good morning. I'm your Inventory Intelligence Copilot. I've already analyzed today's inventory across all stores and found several opportunities to improve revenue and reduce inventory risk.",
    timestamp: "8:02 AM",
  },
];

export const suggestedPrompts: string[] = [
  "What products are likely to stock out?",
  "Show products with highest revenue at risk.",
  "Recommend inventory transfers.",
  "Generate today's executive summary.",
  "Which stores require replenishment?",
  "Identify slow-moving inventory.",
];

export const reports: ReportSummary[] = [
  {
    id: "rep-1",
    title: "Morning Brief",
    summary: "Revenue at risk rose to ₹4.8M overnight, driven by electronics demand in South region stores.",
    generatedBy: "Inventory Copilot",
    lastUpdated: "Today, 7:45 AM",
  },
  {
    id: "rep-2",
    title: "Weekly Summary",
    summary: "Forecast accuracy improved to 91.3%. Three categories flagged for replenishment this week.",
    generatedBy: "Inventory Copilot",
    lastUpdated: "Monday, 6:00 AM",
  },
  {
    id: "rep-3",
    title: "Executive Report",
    summary: "Quarter-to-date overstock cost stands at ₹2.1M, concentrated in seasonal apparel lines.",
    generatedBy: "Inventory Copilot",
    lastUpdated: "3 days ago",
  },
];

export const notices: NoticeItem[] = [
  { id: "n-1", category: "Critical Alert", title: "Laptop 14\" i5 out of stock", detail: "Bangalore Koramangala — 0 units remaining, demand continuing.", timestamp: "12 min ago" },
  { id: "n-2", category: "Recommendation", title: "Transfer suggested for Chennai Central", detail: "120 units of 4K Smart TV available at Hyderabad warehouse.", timestamp: "34 min ago" },
  { id: "n-3", category: "Transfer", title: "Transfer #TR-2291 in transit", detail: "80 units moving from Hyderabad to Chennai Central, ETA tomorrow.", timestamp: "1 hr ago" },
  { id: "n-4", category: "Stockout", title: "Wireless Earbuds Pro at risk", detail: "Bangalore Koramangala — 2.1 days of cover remaining.", timestamp: "2 hr ago" },
  { id: "n-5", category: "Completed", title: "Clearance campaign launched", detail: "Winter apparel markdown applied across Pune and Hyderabad.", timestamp: "Yesterday" },
];
