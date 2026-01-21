import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import vascularTraumaQuestions from "../../data/questions/vascular-trauma";

export default function VascularTraumaQuizPage() {
  const LESSON_URL = "/docs/arterial/vascular-trauma"; // تأكد إن ده نفس مسار الدرس عندك

  return (
    <Layout title="Vascular Trauma Quiz" description="Quiz for Vascular Trauma lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="Vascular Trauma • Lesson Quiz"
            questions={vascularTraumaQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
