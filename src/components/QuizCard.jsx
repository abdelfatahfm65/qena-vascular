import React from "react";
import Link from "@docusaurus/Link";

export default function QuizCard({ to, title = "Test yourself", subtitle, count }) {
  return (
    <div
      style={{
        marginTop: 28,
        padding: 16,
        borderRadius: 14,
        border: "1px solid rgba(0,0,0,0.10)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        background: "var(--ifm-background-surface-color)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
          <div style={{ marginTop: 6, color: "var(--ifm-color-emphasis-700)" }}>
            {subtitle || (typeof count === "number" ? `${count} questions` : "Quick quiz for this lesson")}
          </div>
        </div>

        <Link
          to={to}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 12,
            background: "#2e8555",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 800,
            whiteSpace: "nowrap",
          }}
        >
          Start →
        </Link>
      </div>
    </div>
  );
}
