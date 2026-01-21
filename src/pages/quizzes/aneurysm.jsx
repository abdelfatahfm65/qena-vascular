import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import StepQuiz from "../../components/StepQuiz";
import aneurysmQuestions from "../../data/questions/aneurysm";

export default function AneurysmQuizPage() {
  const LESSON_URL = "/docs/arterial/arterial-aneurysms"; // تأكد من اسم ملف الدرس/slug

  return (
    <Layout title="Arterial Aneurysms Quiz" description="Quiz for Arterial Aneurysms lesson">
      <main style={{ padding: "24px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 14 }}>
            <Link to={LESSON_URL} style={{ textDecoration: "none" }}>
              ← Back to lesson
            </Link>
          </div>

          <StepQuiz
            title="Arterial Aneurysms • Lesson Quiz"
            questions={aneurysmQuestions}
            onExit={() => (window.location.href = LESSON_URL)}
          />
        </div>
      </main>
    </Layout>
  );
}
