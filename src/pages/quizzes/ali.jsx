import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import aliQuestions from "../../data/questions/ali";

export default function AliQuizPage() {
  const LESSON_URL = "/docs/arterial/acute-limb-ischemia"; // عدّل لو slug مختلف

  return (
    <Layout title="ALI Quiz" description="Quiz for Acute Limb Ischemia lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="ALI • Lesson Quiz"
            questions={aliQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
