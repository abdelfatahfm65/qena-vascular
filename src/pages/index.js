import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Vascular Surgery Library"
      description="A concise vascular surgery learning library designed for medical students."
    >
      {/* Hero */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Vascular Surgery Library
          </Heading>
          <p className="hero__subtitle">
            A structured learning platform for understanding arterial and venous diseases
          </p>

          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Start Learning
            </Link>
          </div>
        </div>
      </header>

      {/* Landing content */}
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2">What is this library?</Heading>
            <p>
              A concise vascular surgery learning library designed for medical students.
              Topics are organized anatomically and clinically to support understanding and decision-making.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Start with Introduction
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/arterial/acute-limb-ischemia"
              >
                Arterial Track
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/venous/varicose-veins">
                Venous Track
              </Link>
              <Link className="button button--secondary button--lg" to="/exam">
                Comprehensive Exam
              </Link>
            </div>

            <hr style={{ margin: '28px 0' }} />

            <Heading as="h2">Topics</Heading>

            <div className="row">
              <div className="col col--6">
                <Heading as="h3">Arterial</Heading>
                <ul>
                  <li>
                    <Link to="/docs/arterial/acute-limb-ischemia">Acute Limb Ischemia (ALI)</Link>
                  </li>
                  <li>
                    <Link to="/docs/arterial/chronic-limb-threatening-ischemia">
                      Chronic Limb-Threatening Ischemia (CLTI)
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/arterial/arterial-aneurysms">Arterial Aneurysms</Link>
                  </li>
                  <li>
                    <Link to="/docs/arterial/arteriovenous-fistula">Arteriovenous Fistula (AVF)</Link>
                  </li>
                  <li>
                    <Link to="/docs/arterial/vascular-trauma">Vascular Trauma</Link>
                  </li>
                </ul>
              </div>

              <div className="col col--6">
                <Heading as="h3">Venous</Heading>
                <ul>
                  <li>
                    <Link to="/docs/venous/varicose-veins">Varicose Veins</Link>
                  </li>
                  <li>
                    <Link to="/docs/venous/deep-vein-thrombosis">Deep Vein Thrombosis (DVT)</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 16,
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: 12,
              }}
            >
              <strong>How to use this library:</strong> Start with the Introduction, then follow the arterial
              or venous track. Each topic builds on anatomy, pathophysiology, and clinical presentation.
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
