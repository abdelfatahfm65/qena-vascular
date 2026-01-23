import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../components/StepQuiz";

import exam1 from "../data/questions/exams/exam1";
import exam2 from "../data/questions/exams/exam2";
import exam3 from "../data/questions/exams/exam3";

export default function ExamsPage() {
  const EXAMS = useMemo(() => [exam1, exam2, exam3], []);

  // modes: "exams" | "menu" | "quiz" | "case"
  const [mode, setMode] = useState("exams");
  const [activeExamId, setActiveExamId] = useState(null);
  const [activeCaseId, setActiveCaseId] = useState(null);

  const activeExam = useMemo(() => {
    if (!activeExamId) return null;
    return EXAMS.find((e) => e.id === activeExamId) || null;
  }, [EXAMS, activeExamId]);

  const activeCase = useMemo(() => {
    if (!activeExam || !activeCaseId) return null;
    return activeExam.cases.find((c) => c.id === activeCaseId) || null;
  }, [activeExam, activeCaseId]);

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

  const goToExams = () => {
    setMode("exams");
    setActiveExamId(null);
    setActiveCaseId(null);
  };

  const goToExamMenu = (examId) => {
    setActiveExamId(examId);
    setActiveCaseId(null);
    setMode("menu");
  };

  return (
    <Layout title="Comprehensive Exams" description="Comprehensive exams">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14, display: "flex", gap: 12, alignItems: "center" }}>
            {mode !== "exams" ? (
              <button
                onClick={goToExams}
                style={{ border: "none", background: "transparent", cursor: "pointer", opacity: 0.85, fontWeight: 600 }}
              >
                ← Back to exams
              </button>
            ) : null}

            {mode !== "exams" && mode !== "menu" ? (
              <button
                onClick={() => {
                  setMode("menu");
                  setActiveCaseId(null);
                }}
                style={{ border: "none", background: "transparent", cursor: "pointer", opacity: 0.85, fontWeight: 600 }}
              >
                Back to exam menu
              </button>
            ) : null}
          </div>

          {mode === "exams" ? (
            <>
              <h1 style={{ marginBottom: 6 }}>Comprehensive Exams</h1>
              <div style={{ opacity: 0.75, marginBottom: 18 }}>{EXAMS.length} exams available</div>

              {EXAMS.map((ex, idx) => (
                <Card
                  key={ex.id}
                  title={`Exam ${idx + 1}`}
                  subtitle={`${ex.quiz.questions.length} quiz questions • ${ex.cases.length} cases`}
                  right={<PrimaryBtn onClick={() => goToExamMenu(ex.id)}>Open →</PrimaryBtn>}
                />
              ))}
            </>
          ) : null}

          {mode === "menu" && activeExam ? (
            <>
              <h1 style={{ marginBottom: 6 }}>{activeExam.title}</h1>
              <div style={{ opacity: 0.75, marginBottom: 18 }}>
                {activeExam.quiz.questions.length} quiz questions • {activeExam.cases.length} case discussions
              </div>

              <Card
                title="Quiz"
                subtitle={`${activeExam.quiz.questions.length} Questions (MCQ)`}
                right={<PrimaryBtn onClick={() => setMode("quiz")}>Start →</PrimaryBtn>}
              />

              <div style={{ marginTop: 18, marginBottom: 10, fontWeight: 800, fontSize: 18 }}>
                Case Discussions 
              </div>

              {activeExam.cases.map((c) => (
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

          {mode === "quiz" && activeExam ? (
            <StepQuiz
              key={`exam-quiz-${activeExam.id}`}
              title={activeExam.quiz.title}
              questions={activeExam.quiz.questions}
              onExit={() => setMode("menu")}
              autoStart
            />
          ) : null}

          {mode === "case" && activeExam && activeCase ? (
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
                </div>
              </div>

              <StepQuiz
                key={`exam-case-${activeExam.id}-${activeCase.id}`}
                title="Case Questions"
                questions={activeCase.questions}
                onExit={() => setMode("menu")}
                autoStart
              />
            </>
          ) : null}
        </div>
      </main>
    </Layout>
  );
}
