import React from "react";
import Layout from "@theme/Layout";
import QuizCard from "@site/src/components/QuizCard";
import questions from "@site/src/data/questions/vascular-trauma";

export default function VascularTraumaQuiz() {
  return (
    <Layout title="Vascular Trauma Quiz">
      <main className="container" style={{ padding: "40px 0" }}>
        <QuizCard
          title="Vascular Trauma"
          subtitle="Clinical cases & decision making"
          questions={questions}
        />
      </main>
    </Layout>
  );
}
