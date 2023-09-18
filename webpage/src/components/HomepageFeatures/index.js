import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Week One',
    Svg: require('@site/static/img/wk1.svg').default,
    description: (
      <>
        <ul>
          <li>
            <a href='https://drive.google.com/file/d/1iaMLLEi-_w3Ca5sa_d8vFcoCesiwm0B2/view?usp=sharing' target='_blank' >CLA1 Slide: Introduction to Systems of Linear Equations</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1OOkhkUqsCAl9fE49Jz1emeM4sLGCDLJb/view?usp=sharing' target='_blank' >CLA2 Slide: Vectors, Matrices, and Determinants</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1NgP4U-snV5pqRmP9tl2lf6IWw3d3OI8P/view?usp=sharing' target='_blank' >CLA3 Slide: Triangular Systems of Equations: Forward and Back Substitution</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1JULEMwLjYSS6scyZTA26WvUjTFq_FQ7k/view?usp=sharing' target='_blank' >CLA4 Slide: Matrix Multiplication</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Two',
    Svg: require('@site/static/img/wk2.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/1JzGzKrczJ6b787SDhJOH5zwPddkIMtCO/view?usp=sharing' target='_blank'>DM1 Slide: Data Mining Overview</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1hR9gncIsVfuHqh6yXDHQ1aIRzvcq_r0_/view?usp=sharing' target='_blank'>DM2 Slide: Predictors</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Three',
    Svg: require('@site/static/img/wk3.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/11JLTV4T5r5KLKQ13nnlRyA62puWQu-Yv/view?usp=sharing' target='_blank'>DM3 Slide: Validation</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1TQ4b-lPhjzQEYVLJTM_vvFd7j5j5dhVi/view?usp=sharing' target='_blank'>DM4 Slide: Features</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Four',
    Svg: require('@site/static/img/wk4.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/1ZkDp2zBgUacJWyvdxuCuvlvpSDHdYDFg/view?usp=sharing' target='_blank'>DM5 Slide: Empirical Risk Minimization</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1oI5Oy-SIJdygyFgm552TjubQ-e3kjdrI/view?usp=sharing' target='_blank'>DM6 Slide: Constant predictors</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Five',
    Svg: require('@site/static/img/wk5.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/1saUfIZaTTKN_clicSOimBgXVgm6JPuli/view?usp=sharing' target='_blank'>DM7 Slide: Non-Quadratic Losses</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1hpgA1WW5Av-y2hdVCqEsxVh309B8xScj/view?usp=sharing' target='_blank'>DM8 Slide: House prices example</a>
            <a href='https://drive.google.com/file/d/1Xh4Xd9L3LKy6F5Q19Qc5LzDor8iME3vJ/view?usp=sharing' target='_blank'>house.jl</a>
            <a href='https://drive.google.com/file/d/15ImrnjHWHcplfGzV3cFonLy8SyumD_em/view?usp=sharing' target='_blank'>houseplots.jl</a>
            <a href='https://drive.google.com/file/d/1DMCQ8REMUyPFQyB6h0DuLofoYfJUEr-_/view?usp=sharing' target='_blank'>house.csv</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Six',
    Svg: require('@site/static/img/wk6.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/1pUUoGlTX5GfziN-ge5fBJnwuO2-41EKl/view?usp=sharing' target='_blank'>DM9 Slide: Non-Quadratic Regularizers</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1DdN2kB__vFrB5VHgiAMPlanQOb0M-shf/view?usp=sharing' target='_blank'>DM10 Slide: Neural Networks</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Seven',
    Svg: require('@site/static/img/wk7.svg').default,
    description: (
      <>
       <ul>
          
          <li>
            <a href='https://drive.google.com/file/d/1DJOvcLPDWERr7DeDO_a4aaIp8N2-nqpA/view?usp=sharing' target='_blank'>DM11 Slide: Classifiers</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1IRw4SWAd20lEz3V_XSjptyD9Hb_jRR4k/view?usp=sharing' target='_blank'>DM12 Slide: Loss function and empirical risk</a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eight',
    Svg: require('@site/static/img/wk8.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='#' target='_blank'>DM13 Slide: </a>
          </li>
          <li>
            <a href='#' target='_blank'>DM14 Slide: </a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Nine',
    Svg: require('@site/static/img/wk9.svg').default,
    description: (
      <>
       <ul>
          
          <li>
            <a href='#' target='_blank'>DM15 Slide: </a>
          </li>
          <li>
            <a href='#' target='_blank'>DM16 Slide: </a>
          </li>
          <li>
            <a href='#' target='_blank'>DM17 Slide: </a>
          </li>
          
        </ul>
      </>
    ),
  },
  {
    title: 'Week Ten',
    Svg: require('@site/static/img/wk10.svg').default,
    description: (
      <>
        <ul>
          
          <li>
            <a href='#' target='_blank'>DM18 Slide: </a>
          </li>
          <li>
            <a href='#' target='_blank'>DM19 Slide: </a>
          </li>
          <li>
            <a href='#' target='_blank'>DM20 Slide: </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eleven',
    Svg: require('@site/static/img/wk11.svg').default,
    description: (
      <>
        Revision week
      </>
    ),
  },
  {
    title: 'Week Twelve',
    Svg: require('@site/static/img/wk12.svg').default,
    description: (
      <>
        Examination Week
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
        <h3>{title}</h3>
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
