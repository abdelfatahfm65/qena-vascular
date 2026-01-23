import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import cltiLesson from "../../data/questions/clti";

export default function CltiQuizPage() {
  const LESSON_URL = "/docs/arterial/chronic-limb-threatening-ischemia"; // ✅ slug بتاعك

  // modes: "menu" | "quiz" | "case"
  const [mode, setMode] = useState("menu");
  const [activeCaseId, setActiveCaseId] = useState(null);

  const activeCase = useMemo(() => {
    if (!activeCaseId) return null;
    return cltiLesson.cases.find((c) => c.id === activeCaseId) || null;
  }, [activeCaseId]);

  const goToLesson = () => (window.location.href = LESSON_URL);

  const Card = ({ title, subtitle, right }) => (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        padding: 18,
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        marginBottom: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>{title}</div>
        {subtitle ? <div style={{ opacity: 0.75, marginTop: 4 }}>{subtitle}</div> : null}
      </div>
      <div>{right}</div>
    </div>
  );

  const PrimaryBtn = ({ children, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: "#1f7a3f",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: 12,
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );

  const SecondaryBtn = ({ children, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: "inherit",
        border: "1px solid rgba(0,0,0,0.2)",
        padding: "10px 16px",
        borderRadius: 12,
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );

  return (
    <Layout title="CLTI Quiz" description="Quiz for CLTI lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14, display: "flex", gap: 12, alignItems: "center" }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>

            {mode !== "menu" ? (
              <button
                onClick={() => {
                  setMode("menu");
                  setActiveCaseId(null);
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  opacity: 0.85,
                  fontWeight: 600,
                }}
              >
                Back to quiz menu
              </button>
            ) : null}
          </div>

          {mode === "menu" ? (
            <>
              <h1 style={{ marginBottom: 6 }}>CLTI • Lesson Quiz</h1>
              <div style={{ opacity: 0.75, marginBottom: 18 }}>
                {cltiLesson.quiz.questions.length} questions • {cltiLesson.cases.length} case discussions
              </div>

              <Card
                title="Quiz"
                subtitle={`${cltiLesson.quiz.questions.length} Questions (MCQ)`}
                right={<PrimaryBtn onClick={() => setMode("quiz")}>Start →</PrimaryBtn>}
              />

              <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 800, fontSize: 18 }}>
                Case Discussions (USMLE-style)
              </div>

              {cltiLesson.cases.map((c) => (
                <Card
                  key={c.id}
                  title={c.title}
                  subtitle={`${c.questions.length} Questions (MCQ)`}
                  right={
                    <PrimaryBtn
                      onClick={() => {
                        setActiveCaseId(c.id);
                        setMode("case");
                      }}
                    >
                      Start →
                    </PrimaryBtn>
                  }
                />
              ))}
            </>
          ) : null}

          {mode === "quiz" ? (
            <StepQuiz
              key="clti-quiz"
              title={cltiLesson.quiz.title}
              questions={cltiLesson.quiz.questions}
              onExit={() => setMode("menu")}
              autoStart
            />
          ) : null}

          {mode === "case" && activeCase ? (
            <>
              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 14,
                  padding: 16,
                  marginBottom: 14,
                  background: "rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{activeCase.title}</div>
                <div style={{ opacity: 0.85, lineHeight: 1.6 }}>{activeCase.vignette}</div>

                <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <SecondaryBtn
                    onClick={() => {
                      setMode("menu");
                      setActiveCaseId(null);
                    }}
                  >
                    Back to menu
                  </SecondaryBtn>
                  <SecondaryBtn onClick={goToLesson}>Exit to lesson</SecondaryBtn>
                </div>
              </div>

              <StepQuiz
                key={activeCase.id}
                title="Case Questions"
                questions={activeCase.questions}
                onExit={() => setMode("menu")}
                autoStart
              />
            </>
          ) : null}

          {mode === "case" && !activeCase ? (
            <div style={{ opacity: 0.8 }}>
              Case not found.{" "}
              <button
                onClick={() => setMode("menu")}
                style={{ border: "none", background: "transparent", cursor: "pointer" }}
              >
                Back to menu
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </Layout>
  );
}
