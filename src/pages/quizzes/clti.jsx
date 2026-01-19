import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import cltiQuestions from "../../data/questions/clti";

export default function CltiQuizPage() {
  const LESSON_URL = "/docs/arterial/chronic-limb-threatening-ischemia"; // عدّل لو slug مختلف

  return (
    <Layout title="CLTI Quiz" description="Quiz for CLTI lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="CLTI • Lesson Quiz"
            questions={cltiQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
