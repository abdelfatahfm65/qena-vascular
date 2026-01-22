import React, { useEffect, useMemo, useState } from "react";

export default function StepQuiz({
  questions = [],
  onExit,
  title = "Quiz",
  autoStart = false, // ✅ NEW
}) {
  const total = questions.length;

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[index];

  const answeredCount = useMemo(() => Object.keys(selected).length, [selected]);

  const score = useMemo(() => {
    return questions.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0);
  }, [questions, selected]);

  // ✅ لو autoStart=true ادخل مباشرة على الأسئلة
  useEffect(() => {
    if (autoStart) {
      setStarted(true);
    } else {
      // لو autoStart=false ارجع لشاشة البداية (خصوصًا لو نفس الكومبوننت اتعاد استخدامه)
      setStarted(false);
    }
    // دايمًا ابدأ من الأول لما تتغير الأسئلة/المود
    setIndex(0);
    setSelected({});
    setSubmitted(false);
  }, [autoStart, questions]);

  function start() {
    setStarted(true);
  }

  function choose(optIndex) {
    setSelected((prev) => ({ ...prev, [index]: optIndex }));
  }

  function next() {
    setIndex((i) => Math.min(i + 1, total - 1));
  }

  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  function submit() {
    setSubmitted(true);
  }

  function reset() {
    // ✅ لو الصفحة فيها menu-start (autoStart=true) ما نرجعش لشاشة Start الداخلية
    setStarted(autoStart ? true : false);
    setIndex(0);
    setSelected({});
    setSubmitted(false);
  }

  if (!Array.isArray(questions) || total === 0) {
    return (
      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <strong>No questions found.</strong>
        <div style={{ marginTop: 8, color: "#666" }}>
          Check that your questions file exports an array.
        </div>
      </div>
    );
  }

  // Start Screen (هتظهر فقط لو autoStart=false)
  if (!started) {
    return (
      <div
        style={{
          padding: 18,
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.10)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          background: "var(--ifm-background-surface-color)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p style={{ color: "var(--ifm-color-emphasis-700)" }}>
          {total} questions • Answer at your own pace.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={start}
            style={{
              padding: "10px 16px",
              borderRadius: 12,
              border: "none",
              background: "#2e8555",
              color: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Start Quiz
          </button>

          {typeof onExit === "function" && (
            <button
              onClick={onExit}
              style={{
                padding: "10px 16px",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.18)",
                background: "transparent",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Back to lesson
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results Screen
  if (submitted) {
    return (
      <div
        style={{
          padding: 18,
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.10)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          background: "var(--ifm-background-surface-color)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Results</h2>
        <p style={{ fontWeight: 800, fontSize: 18 }}>
          ✅ Score: {score} / {total}
        </p>

        <details style={{ marginTop: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 800 }}>Review answers</summary>

          <div style={{ marginTop: 12 }}>
            {questions.map((q, i) => {
              const user = selected[i];
              const correct = q.answer;
              const ok = user === correct;

              return (
                <div
                  key={i}
                  style={{
                    marginBottom: 12,
                    padding: 12,
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.10)",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>
                    {i + 1}. {q.question}
                  </div>
                  <div style={{ color: ok ? "#1e7e34" : "#c82333", fontWeight: 800 }}>
                    {ok ? "Correct" : "Wrong"}
                  </div>
                  <div style={{ marginTop: 6, color: "var(--ifm-color-emphasis-700)" }}>
                    Your answer: {user != null ? q.options[user] : "Not answered"}
                    <br />
                    Correct answer: {q.options[correct]}
                  </div>
                </div>
              );
            })}
          </div>
        </details>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <button
            onClick={reset}
            style={{
              padding: "10px 16px",
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.18)",
              background: "transparent",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Try again
          </button>

          {typeof onExit === "function" && (
            <button
              onClick={onExit}
              style={{
                padding: "10px 16px",
                borderRadius: 12,
                border: "none",
                background: "#2e8555",
                color: "#fff",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Back to lesson
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz Screen (step-by-step)
  const progressText = `${index + 1} / ${total}`;

  return (
    <div
      style={{
        padding: 18,
        borderRadius: 16,
        border: "1px solid rgba(0,0,0,0.10)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
        background: "var(--ifm-background-surface-color)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 900 }}>{title}</div>
        <div style={{ color: "var(--ifm-color-emphasis-700)", fontWeight: 800 }}>
          {progressText} • Answered {answeredCount}/{total}
        </div>
      </div>

      <div style={{ height: 10, background: "rgba(0,0,0,0.08)", borderRadius: 999, marginTop: 12 }}>
        <div
          style={{
            height: "100%",
            width: `${((index + 1) / total) * 100}%`,
            background: "#2e8555",
            borderRadius: 999,
            transition: "width 200ms ease",
          }}
        />
      </div>

      <div style={{ marginTop: 16, fontSize: 16, fontWeight: 900 }}>
        {index + 1}. {current.question}
      </div>

      <div style={{ marginTop: 12 }}>
        {current.options.map((opt, optIndex) => {
          const picked = selected[index] === optIndex;

          return (
            <button
              key={optIndex}
              onClick={() => choose(optIndex)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: 12,
                borderRadius: 12,
                marginBottom: 10,
                border: picked ? "2px solid #2e8555" : "1px solid rgba(0,0,0,0.14)",
                background: picked ? "rgba(46,133,85,0.08)" : "transparent",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
        <button
          onClick={prev}
          disabled={index === 0}
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.18)",
            background: "transparent",
            cursor: index === 0 ? "not-allowed" : "pointer",
            fontWeight: 800,
            opacity: index === 0 ? 0.5 : 1,
          }}
        >
          ← Prev
        </button>

        {index < total - 1 ? (
          <button
            onClick={next}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "none",
              background: "#2e8555",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={submit}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "none",
              background: "#2e8555",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 900,
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
