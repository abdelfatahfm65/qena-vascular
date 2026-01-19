import React from "react";
import Link from "@docusaurus/Link";

export default function QuizButton({ to, label = "Test yourself" }) {
  return (
    <div style={{ marginTop: 24, marginBottom: 24 }}>
      <Link
        to={to}
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: 10,
          background: "#2e8555",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        {label}
      </Link>
    </div>
  );
}
