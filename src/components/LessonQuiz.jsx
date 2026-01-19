import React, { useMemo, useState } from "react";

export default function LessonQuiz({ questions = [] }) {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((acc, q, i) => {
      return acc + (selected[i] === q.answer ? 1 : 0);
    }, 0);
  }, [questions, selected]);

  function handleSelect(qIndex, optionIndex) {
    setSelected((prev) => ({ ...prev, [qIndex]: optionIndex }));
  }

  function reset() {
    setSelected({});
    setSubmitted(false);
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div style={{ marginTop: 24, padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
        <strong>No questions found for this lesson.</strong>
        <div style={{ marginTop: 8, color: "#666" }}>
          Check that you imported the correct questions file and it exports an array.
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h2 style={{ marginBottom: 12 }}>📝 Lesson Quiz</h2>

      {questions.map((q, qIndex) => {
        return (
          <div
            key={qIndex}
            style={{
              marginBottom: 20,
              padding: 15,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <p style={{ marginBottom: 10 }}>
              <strong>
                {qIndex + 1}. {q.question}
              </strong>
            </p>

            {q.options.map((opt, optIndex) => {
              const isCorrect = submitted && optIndex === q.answer;
              const isWrong = submitted && selected[qIndex] === optIndex && optIndex !== q.answer;

              return (
                <label
                  key={optIndex}
                  style={{
                    display: "block",
                    padding: 8,
                    borderRadius: 8,
                    marginBottom: 6,
                    background: isCorrect ? "#d4edda" : isWrong ? "#f8d7da" : "transparent",
                    cursor: submitted ? "default" : "pointer",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <input
                    type="radio"
                    name={`q-${qIndex}`}
                    checked={selected[qIndex] === optIndex}
                    onChange={() => handleSelect(qIndex, optIndex)}
                    disabled={submitted}
                    style={{ marginRight: 8 }}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        );
      })}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#2e8555",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Submit Quiz
        </button>
      ) : (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: "bold" }}>
            ✅ Score: {score} / {questions.length}
          </div>

          <button
            onClick={reset}
            style={{
              marginTop: 10,
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
