import React, { useEffect, useMemo, useState } from "react";

type MediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;      // short (card)
      fullCaption?: string;  // long (lightbox)
    }
  | {
      type: "video";
      provider?: "youtube";
      src: string; // youtube id OR mp4 url
      title: string;
      caption?: string;      // short (card)
      fullCaption?: string;  // long (lightbox)
    };

export default function LightboxGallery({
  items = [],
  minWidth = 260,
}: {
  items?: MediaItem[];
  minWidth?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const active = useMemo(
    () => (openIndex === null ? null : items[openIndex]),
    [openIndex, items]
  );

  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? 0 : (i - 1 + items.length) % items.length
    );

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, items.length]);

  if (!items?.length) return null;

  return (
    <>
      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
          gap: "14px",
          alignItems: "start",
          marginTop: "12px",
          marginBottom: "18px",
        }}
      >
        {items.map((m, idx) => {
          const isVideo = m.type === "video";
          const thumb =
            isVideo && m.provider === "youtube"
              ? `https://img.youtube.com/vi/${m.src}/hqdefault.jpg`
              : isVideo
              ? "/img/gallery/video_placeholder.jpg"
              : m.src;

          const label = isVideo
            ? `Play video ${idx + 1}`
            : `Open image ${idx + 1}`;

          const title = isVideo ? m.title : m.alt;

          // Short text for card (keep it short)
          const cardText =
            (m.caption && m.caption.trim().length ? m.caption : title) ?? title;

          return (
            <button
              key={`${isVideo ? "v" : "i"}-${m.src}-${idx}`}
              onClick={() => setOpenIndex(idx)}
              style={{
                all: "unset",
                cursor: isVideo ? "pointer" : "zoom-in",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(0, 0, 0, 0.10)",
                background: "#fff",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
              }}
              aria-label={label}
            >
              {/* Fixed ratio thumbnail */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  background: "#111",
                }}
              >
                <img
                  src={thumb}
                  alt={title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {isVideo && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.35))",
                    }}
                  >
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.92)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 20,
                      }}
                    >
                      ▶
                    </div>
                  </div>
                )}
              </div>

              {/* Card caption (2 lines max) */}
              <div
                style={{
                  padding: "10px 12px",
                  fontSize: "0.92rem",
                  opacity: 0.9,
                  lineHeight: 1.35,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as any,
                  overflow: "hidden",
                  minHeight: "2.5em",
                }}
              >
                {cardText}
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {isOpen && active && (
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              maxHeight: "90vh",
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              minHeight: 0, // IMPORTANT for flex + scroll
            }}
          >
            {/* Top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                flex: "0 0 auto",
              }}
            >
              <div style={{ fontSize: "0.9rem", opacity: 0.75 }}>
                {openIndex! + 1} / {items.length}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={prev} style={btnStyle} aria-label="Previous">
                  ◀
                </button>
                <button onClick={next} style={btnStyle} aria-label="Next">
                  ▶
                </button>
                <button onClick={close} style={btnStyle} aria-label="Close">
                  ✕
                </button>
              </div>
            </div>

            {/* Content (image/video) */}
            <div
              style={{
                background: "#111",
                display: "flex",
                justifyContent: "center",
                flex: "1 1 auto",
                minHeight: 0, // IMPORTANT
              }}
            >
              {active.type === "image" ? (
                <img
                  src={active.src}
                  alt={active.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "55vh", // leave room for caption scroll
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              ) : active.provider === "youtube" ? (
                <div style={{ width: "100%", aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${active.src}`}
                    title={active.title}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  controls
                  style={{
                    width: "100%",
                    maxHeight: "55vh",
                    background: "#000",
                  }}
                >
                  <source src={active.src} />
                </video>
              )}
            </div>

            {/* Caption (scrollable) */}
            <div
              style={{
                padding: "12px 14px",
                fontSize: "0.95rem",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                overflowY: "auto",
                maxHeight: "28vh",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                {active.type === "image" ? active.alt : active.title}
              </div>

              {(() => {
                const full =
                  ("fullCaption" in active && active.fullCaption
                    ? active.fullCaption
                    : undefined) ??
                  ("caption" in active && active.caption ? active.caption : undefined);

                return full ? (
                  <div style={{ opacity: 0.85, lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
                    {full}
                  </div>
                ) : null;
              })()}

              <div style={{ marginTop: "8px", opacity: 0.6, fontSize: "0.85rem" }}>
                Tip: Use ← → keys, Esc to close.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const btnStyle: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.15)",
  background: "white",
  borderRadius: "10px",
  padding: "6px 10px",
  cursor: "pointer",
  fontSize: "0.95rem",
};
