import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import varicoseVeinsQuestions from "../../data/questions/varicoseVeins";

export default function VaricoseVeinsQuizPage() {
  const LESSON_URL = "/docs/venous/varicose-veins"; // عدّل لو slug مختلف

  return (
    <Layout title="Varicose Veins Quiz" description="Quiz for Varicose Veins lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="Varicose Veins • Lesson Quiz"
            questions={varicoseVeinsQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
