import React from "react";
import { MetricItem } from "../types";

interface MetricsSectionProps {
  metrics: MetricItem[];
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <section className="numbers" id="metricas">
      {metrics.map((metric, idx) => (
        <div key={idx} id={`metric-item-${idx}`}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
};
