import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arterial Diseases',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Introduces arterial pathologies affecting blood supply, including
        acute limb ischemia, chronic limb-threatening ischemia, aneurysmal
        disease, and vascular trauma, with an anatomy-based approach.
      </>
    ),
  },
  {
    title: 'Venous Disorders',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explores venous diseases resulting from impaired venous return, such as
        varicose veins, chronic venous insufficiency, deep vein thrombosis,
        and arteriovenous fistulas.
      </>
    ),
  },
  {
    title: 'Clinical Reasoning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Emphasizes clinical reasoning by correlating vascular anatomy,
        pathophysiology, and patient presentation to diagnostic and
        management strategies.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
