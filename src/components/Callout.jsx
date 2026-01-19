import React from "react";

const styles = {
  base: {
    borderRadius: 14,
    padding: "14px 14px",
    border: "1px solid rgba(0,0,0,0.10)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
    margin: "14px 0",
    background: "var(--ifm-background-surface-color)",
  },
  title: { fontWeight: 900, marginBottom: 6 },
  info: { borderLeft: "5px solid #2e8555" },
  warn: { borderLeft: "5px solid #d9822b" },
  danger: { borderLeft: "5px solid #c82333" },
  pearl: { borderLeft: "5px solid #4c6ef5" },
};

export default function Callout({ type = "info", title, children }) {
  const kind =
    type === "warn" ? styles.warn :
    type === "danger" ? styles.danger :
    type === "pearl" ? styles.pearl :
    styles.info;

  return (
    <div style={{ ...styles.base, ...kind }}>
      {title ? <div style={styles.title}>{title}</div> : null}
      <div>{children}</div>
    </div>
  );
}
