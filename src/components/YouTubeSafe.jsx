import React, { useState } from "react";

export default function YouTubeSafe({ id, title = "YouTube video" }) {
  const [failed, setFailed] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${id}`;
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  if (failed) {
    return (
      <div style={{ margin: "18px 0" }}>
        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.12)",
            boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
            textDecoration: "none",
          }}
        >
          <img src={thumbUrl} alt={title} style={{ width: "100%", display: "block" }} />
          <div style={{ padding: 12, fontWeight: 800 }}>▶ Watch on YouTube</div>
        </a>
      </div>
    );
  }

  return (
    <div style={{ margin: "18px 0" }}>
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
        }}
      >
        <iframe
          src={embedUrl}
          title={title}
          onError={() => setFailed(true)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </div>
  );
}
