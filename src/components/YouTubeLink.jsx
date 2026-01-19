import React from "react";

export default function YouTubeLink({ id, title }) {
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div style={{ margin: "18px 0" }}>
      <a
        href={watchUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          textDecoration: "none",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={thumbUrl}
            alt={title}
            style={{ width: "100%", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.25)",
              fontSize: 56,
              color: "#fff",
            }}
          >
            ▶
          </div>
        </div>

        <div style={{ padding: 12, fontWeight: 800 }}>
          {title}
          <div style={{ fontSize: 13, opacity: 0.7 }}>
            Watch on YouTube
          </div>
        </div>
      </a>
    </div>
  );
}
