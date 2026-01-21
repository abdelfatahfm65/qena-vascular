import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import avfQuestions from "../../data/questions/avf";

export default function AvfQuizPage() {
  const LESSON_URL = "/docs/arterial/arteriovenous-fistula"; // عدّل لو اسم الملف/slug مختلف

  return (
    <Layout title="AVF Quiz" description="Quiz for Arteriovenous Fistula lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="AVF • Lesson Quiz"
            questions={avfQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
