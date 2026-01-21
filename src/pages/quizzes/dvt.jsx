import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import dvtQuestions from "../../data/questions/dvt";

export default function DvtQuizPage() {
  const LESSON_URL = "/docs/venous/deep-vein-thrombosis"; // عدّل لو slug مختلف

  return (
    <Layout title="DVT Quiz" description="Quiz for Deep Vein Thrombosis lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="DVT • Lesson Quiz"
            questions={dvtQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}