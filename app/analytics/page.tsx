"use client";

import ReactECharts from "echarts-for-react";

const revenueTrend = {
  tooltip: { trigger: "axis" },
  grid: { left: 40, right: 20, top: 20, bottom: 30 },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: { lineStyle: { color: "#E5E7EB" } },
  },
  yAxis: { type: "value", splitLine: { lineStyle: { color: "#F1F5F9" } } },
  series: [
    {
      name: "Revenue (₹L)",
      type: "line",
      smooth: true,
      data: [42, 45, 41, 48, 52, 58, 55],
      lineStyle: { color: "#0057B8", width: 2 },
      itemStyle: { color: "#0057B8" },
      areaStyle: { color: "rgba(0,87,184,0.08)" },
    },
  ],
};

const storePerformance = {
  tooltip: { trigger: "axis" },
  grid: { left: 80, right: 20, top: 20, bottom: 30 },
  xAxis: { type: "value", splitLine: { lineStyle: { color: "#F1F5F9" } } },
  yAxis: {
    type: "category",
    data: ["Pune Camp", "Hyderabad Banjara Hills", "Chennai OMR", "Bangalore Koramangala", "Chennai Central"],
  },
  series: [
    {
      type: "bar",
      data: [64, 71, 78, 82, 88],
      itemStyle: { color: "#0078D4", borderRadius: [0, 4, 4, 0] },
      barWidth: 16,
    },
  ],
};

const abcXyz = {
  tooltip: { trigger: "item" },
  legend: { bottom: 0, textStyle: { color: "#6B7280", fontSize: 11 } },
  series: [
    {
      type: "pie",
      radius: ["45%", "70%"],
      itemStyle: { borderColor: "#fff", borderWidth: 2 },
      label: { show: false },
      data: [
        { value: 48, name: "A - Stable (AX)", itemStyle: { color: "#0057B8" } },
        { value: 27, name: "B - Moderate (BY)", itemStyle: { color: "#0078D4" } },
        { value: 16, name: "C - Erratic (CZ)", itemStyle: { color: "#F59E0B" } },
        { value: 9, name: "Other", itemStyle: { color: "#E5E7EB" } },
      ],
    },
  ],
};

function ChartCard({ title, option, height = 260 }: { title: string; option: object; height?: number }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5 shadow-soft">
      <h3 className="text-sm font-semibold text-ink mb-2">{title}</h3>
      <ReactECharts option={option} style={{ height }} />
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-ink">Analytics</h1>
        <p className="text-sm text-ink-muted mt-1">
          Supporting detail behind the Copilot's recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Revenue Trend (7 days)" option={revenueTrend} />
        <ChartCard title="Store Performance Index" option={storePerformance} />
      </div>
      <ChartCard title="ABC / XYZ Inventory Classification" option={abcXyz} height={300} />
    </div>
  );
}
