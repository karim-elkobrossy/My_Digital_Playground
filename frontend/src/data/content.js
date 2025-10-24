export const heroContent = {
  name: 'Karim Elkobrossy',
  headline: 'Welcome! Dive into my digital playground',
  tagline: 'Machine Learning Engineer · Author · Lifelong Innovator',
  description: [
    'A Machine Learning Engineer and Author who dives into complex projects with a strategic mindset and innovative problem-solving.',
    'Passionate about continuous learning and driven by efficiency and creativity.'
  ],
  profileImage: '/images/Karim_Elkobrossy.jpg',
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karim-elkobrossy/'
    }
  ]
};

export const projectCategories = [
  {
    id: 'ml-ds',
    title: 'Machine Learning & Data Science Projects',
    accent: 'var(--accent-ml)',
    description:
      'Applied research that blends experimental tribology insights with data-centric machine learning workflows.',
    projects: [
      {
        id: 'journal-bearing',
        title:
          'Data Pruning for Cost-Efficient Training in Tribological Analysis on Journal Bearing Systems — Rolls Royce',
        status: 'Upcoming publication',
        image: '/images/journal_bearing.jfif',
        summary:
          'Advanced pruning strategies for regression models applied to journal bearing systems, delivering cost-efficient training workflows.',
        highlights: [
          {
            title: 'Literature Gap Filling',
            details: 'Novel multi-tasking autoencoder, adaptive DBSCAN algorithm, and a refined Selesup-based approach tackle instance reduction gaps in regression.'
          },
          {
            title: 'Algorithmic Comparison',
            details: 'Rigorous benchmarking across proposed methods, random sampling, and the full dataset.'
          },
          {
            title: 'Pruning Percentage Analysis',
            details: 'Evaluation of how varying pruning levels impact regression autoencoders versus baselines.'
          },
          {
            title: "Reynold's Equation via Deep Learning",
            details: "Applied deep learning with Gümbel’s assumptions to analytically solve Reynold's equation."
          }
        ],
        links: [
          {
            label: 'Academic Paper',
            url: 'https://drive.google.com/file/d/1KN4C_ZVaGKRUtugYXLrr9thf3wXW1MII/view?usp=sharing'
          },
          {
            label: 'Jupyter Notebooks',
            url: 'https://github.com/karim-elkobrossy/Data-Pruning-for-Cost-Efficient-Training-in-Tribological-Analysis-on-Journal-Bearing'
          }
        ]
      },
      {
        id: 'water-pumps',
        title:
          'Predictive Modelling for the Forecasting of Water Pumps Functionality (Tanzania Case Study)',
        image: '/images/water_pump.png',
        summary:
          'Forecasted the operational status of water pumps across Tanzania with machine learning and robust feature engineering tailored to imbalanced data.',
        description:
          'The project couples deep learning and gradient boosting with targeted preprocessing strategies to ensure resilient predictions in humanitarian infrastructure contexts.',
        links: [
          {
            label: 'Academic Paper',
            url: 'https://drive.google.com/file/d/154TG2c9ADL6gLVpce3BFuk0yHQUFrsE2/view?usp=sharing'
          },
          {
            label: 'Jupyter Notebook',
            url: 'https://github.com/Karim977/Predictive-modelling-for-the-forecasting-of-water-pumps-functionality-Tanzania-case-study-'
          }
        ]
      },
      {
        id: 'feature-selection',
        title: 'A Comparative Study of Feature Selection Techniques',
        image: '/images/Big Data.jfif',
        summary:
          'Investigated the impact of diverse feature selection strategies on machine learning performance for large-scale datasets.',
        description:
          'Delivering actionable insight on dimensionality reduction trade-offs in big data environments.',
        links: [
          {
            label: 'Academic Paper',
            url: 'https://drive.google.com/file/d/152aFstlMTx96BDthN5o489WJWm2U8sBV/view?usp=sharing'
          },
          {
            label: 'Jupyter Notebook',
            url: 'https://github.com/Karim977/A-Comparative-Study-of-Feature-Selection-Techniques'
          }
        ]
      }
    ]
  },
  {
    id: 'programming-web',
    title: 'Programming & Web Development Projects',
    accent: 'var(--accent-dev)',
    description:
      'Interactive experiences and platforms engineered with craftsmanship across the modern web stack.',
    projects: [
      {
        id: 'uno-game',
        title: 'AI-powered UNO Game',
        image: '/images/UNO_Logo.png',
        summary:
          'A fully interactive UNO experience built with Python OOP, featuring three AI opponents and smooth gameplay animations.',
        highlights: [
          { title: 'Scale', details: 'Nearly 1,000 lines of optimized, object-oriented Python.' },
          { title: 'Gameplay', details: 'Supports three autonomous bots and a human player.' },
          { title: 'Polish', details: 'End-to-end game loop with responsive animations.' }
        ],
        links: [
          { label: 'Play on GitHub', url: 'https://github.com/Karim977/UNO-GAME' }
        ]
      },
      {
        id: 'police-workforce',
        title: 'Police Workforce Website',
        image: '/images/Police.jpg',
        summary:
          'Comprehensive workforce management platform using HTML, CSS, JavaScript, PHP, and MySQL.',
        description:
          'Shipped with technical and user documentation to streamline deployment and onboarding.',
        links: [
          { label: 'Explore the Project', url: 'https://github.com/Karim977/Police-Workforce-Website' }
        ]
      }
    ]
  }
];
