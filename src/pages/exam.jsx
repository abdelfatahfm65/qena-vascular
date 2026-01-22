import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

// ✅ Question banks (put them under: src/data/questions/)
import aliQuestions from '../data/questions/ali';
import cltiQuestions from '../data/questions/clti';
import aneurysmQuestions from '../data/questions/aneurysm';
import avfQuestions from '../data/questions/avf';
import dvtQuestions from '../data/questions/dvt';
import varicoseVeinsQuestions from '../data/questions/varicoseVeins';
import vascularTraumaQuestions from '../data/questions/vascular-trauma';

// ---- Config: fixed blueprint totals (sum must be 20) ----
const BLUEPRINT = {
  ali: 4,
  clti: 3,
  aneurysm: 3,
  avf: 2,
  vascularTrauma: 2,
  varicoseVeins: 3,
  dvt: 3,
};

const BANKS = {
  ali: {title: 'Acute Limb Ischemia (ALI)', data: aliQuestions},
  clti: {title: 'Chronic Limb-Threatening Ischemia (CLTI)', data: cltiQuestions},
  aneurysm: {title: 'Arterial Aneurysms', data: aneurysmQuestions},
  avf: {title: 'Arteriovenous Fistula (AVF)', data: avfQuestions},
  vascularTrauma: {title: 'Vascular Trauma', data: vascularTraumaQuestions},
  varicoseVeins: {title: 'Varicose Veins', data: varicoseVeinsQuestions},
  dvt: {title: 'Deep Vein Thrombosis (DVT)', data: dvtQuestions},
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateExam() {
  const picked = [];

  Object.entries(BLUEPRINT).forEach(([key, need]) => {
    const bank = BANKS[key]?.data ?? [];

    // Add metadata + stable id
    const withMeta = bank.map((q, idx) => ({
      ...q,
      _id: `${key}-${idx}-${String(q.question).slice(0, 20).replace(/\s+/g, '-')}`,
      _topicKey: key,
      _topicTitle: BANKS[key]?.title ?? key,
    }));

    const chosen = shuffle(withMeta).slice(0, Math.min(need, withMeta.length));
    picked.push(...chosen);
  });

  // final shuffle and ensure 20 max
  return shuffle(picked).slice(0, 20);
}

export default function ExamPage() {
  const [version, setVersion] = useState(0);
  const exam = useMemo(() => generateExam(), [version]);

  const [answers, setAnswers] = useState({}); // {_id: optionIndex}
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return exam.reduce((acc, q) => acc + (answers[q._id] === q.answer ? 1 : 0), 0);
  }, [submitted, exam, answers]);

  return (
    <Layout
      title="Comprehensive Exam"
      description="A 20-question comprehensive exam generated from all lessons."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Comprehensive Exam (20 Questions)</Heading>

        <p style={{opacity: 0.85}}>
          Generated from all lessons. Click{' '}
          <strong>Generate New Exam</strong> for a new random set.
        </p>

        <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16}}>
          <button
            className="button button--primary"
            onClick={() => {
              setSubmitted(false);
              setAnswers({});
              setVersion((v) => v + 1);
            }}
          >
            Generate New Exam
          </button>

          <button
            className="button button--secondary"
            onClick={() => setSubmitted(true)}
            disabled={submitted}
          >
            Submit
          </button>

          {submitted && (
            <div style={{alignSelf: 'center'}}>
              <strong>Score:</strong> {score} / {exam.length}
            </div>
          )}

          <Link className="button button--outline button--secondary" to="/docs/intro">
            Back to Library
          </Link>
        </div>

        {exam.map((q, index) => {
          const selected = answers[q._id];
          const isCorrect = submitted && selected === q.answer;
          const isWrong = submitted && selected !== undefined && selected !== q.answer;

          return (
            <div
              key={q._id}
              style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: 12,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', gap: 12}}>
                <Heading as="h3" style={{marginBottom: 8}}>
                  Q{index + 1}. {q.question}
                </Heading>
                <small style={{opacity: 0.75}}>{q._topicTitle}</small>
              </div>

              <div style={{display: 'grid', gap: 8}}>
                {q.options.map((opt, i) => (
                  <label key={i} style={{display: 'flex', gap: 10, alignItems: 'flex-start'}}>
                    <input
                      type="radio"
                      name={q._id}
                      checked={selected === i}
                      disabled={submitted}
                      onChange={() => setAnswers((a) => ({...a, [q._id]: i}))}
                    />
                    <span style={{fontWeight: submitted && i === q.answer ? 700 : 400}}>
                      {opt}
                      {submitted && i === q.answer ? ' ✅' : ''}
                      {submitted && isWrong && i === selected ? ' ❌' : ''}
                    </span>
                  </label>
                ))}
              </div>

              {submitted && (
                <div style={{marginTop: 10}}>
                  {isCorrect ? 'Correct ✅' : isWrong ? 'Incorrect ❌' : 'Not answered'}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </Layout>
  );
}
