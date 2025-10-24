export const heroContent = {
  name: 'Karim Elkobrossy',
  headline: 'Welcome! Dive into my digital playground',
  subheading:
    'Machine Learning Engineer and author exploring complex projects with a strategic mindset and innovative problem-solving.',
  highlight:
    'Passionate about continuous learning, driven by efficiency and creativity.',
  portrait: '/images/Karim_Elkobrossy.jpg',
  linkedin: 'https://www.linkedin.com/in/karim-elkobrossy/'
};

export const projectCategories = [
  {
    id: 'ml',
    title: 'Machine Learning & Data Science',
    subtitle: 'Machine Learning / Data Science Projects',
    projects: [
      {
        id: 'journal-bearing',
        title:
          'Data Pruning for Cost-Efficient Training in Tribological Analysis on Journal Bearing Systems — Rolls Royce',
        status: 'Upcoming publication',
        image: '/images/journal_bearing.jfif',
        summary:
          'Algorithmic innovations for cost-efficient regression modelling in journal bearing systems, including deep learning approaches to Reynold’s equation.',
        highlights: [
          'Designed a multi-tasking autoencoder that simultaneously learns across tribological tasks.',
          'Introduced an adaptive DBSCAN variant tailored for regression instance reduction.',
          'Enhanced the Selesup algorithm to better balance accuracy and data footprint.',
          'Benchmarked pruning strategies against random sampling and full dataset baselines.',
          'Explored pruning percentage implications across regression autoencoders and classical baselines.'
        ],
        links: [
          {
            label: 'Academic paper',
            href: 'https://drive.google.com/file/d/1KN4C_ZVaGKRUtugYXLrr9thf3wXW1MII/view?usp=sharing'
          },
          {
            label: 'Jupyter notebooks',
            href: 'https://github.com/karim-elkobrossy/Data-Pruning-for-Cost-Efficient-Training-in-Tribological-Analysis-on-Journal-Bearing'
          }
        ]
      },
      {
        id: 'water-pumps',
        title: 'Predictive Modelling for Forecasting Water Pump Functionality (Tanzania case study)',
        image: '/images/water_pump.png',
        summary:
          'Forecasts the operational status of Tanzanian water pumps using deep learning and gradient boosting with robust handling of imbalanced datasets.',
        links: [
          {
            label: 'Academic paper',
            href: 'https://drive.google.com/file/d/154TG2c9ADL6gLVpce3BFuk0yHQUFrsE2/view?usp=sharing'
          },
          {
            label: 'Jupyter notebook',
            href: 'https://github.com/Karim977/Predictive-modelling-for-the-forecasting-of-water-pumps-functionality-Tanzania-case-study-'
          },
          {
            label: 'Competition',
            href: 'https://www.drivendata.org/competitions/7/pump-it-up-data-mining-the-water-table/page/23/'
          }
        ]
      },
      {
        id: 'feature-selection',
        title: 'A Comparative Study of Feature Selection Techniques',
        image: '/images/Big Data.jfif',
        summary:
          'Investigates how different feature selection techniques shape machine learning performance in big data settings.',
        links: [
          {
            label: 'Academic paper',
            href: 'https://drive.google.com/file/d/152aFstlMTx96BDthN5o489WJWm2U8sBV/view?usp=sharing'
          },
          {
            label: 'Jupyter notebook',
            href: 'https://github.com/Karim977/A-Comparative-Study-of-Feature-Selection-Techniques'
          }
        ]
      }
    ]
  },
  {
    id: 'web',
    title: 'Programming & Web Experiences',
    subtitle: 'Programming / Web Development Projects',
    projects: [
      {
        id: 'uno',
        title: 'AI-powered UNO Game',
        image: '/images/UNO_Logo.png',
        summary:
          'A fully fledged Python OOP UNO game that pits three AI bots against a single human player with smooth in-game animations.',
        highlights: [
          '≈1000 lines of clean Python OOP code.',
          'Three intelligent autonomous bots and one user player.',
          'Responsive game flow with polished animations.'
        ],
        links: [
          {
            label: 'Game repository',
            href: 'https://github.com/Karim977/UNO-GAME'
          }
        ]
      },
      {
        id: 'police',
        title: 'Police Workforce Website',
        image: '/images/Police.jpg',
        summary:
          'A full-stack police workforce platform spanning HTML, CSS, JavaScript, PHP, and MySQL, complete with technical and user guides.',
        links: [
          {
            label: 'Website repository',
            href: 'https://github.com/Karim977/Police-Workforce-Website'
          }
        ]
      }
    ]
  }
];

export const footerContent = {
  copyright: '© 2024 Karim Elkobrossy. All rights reserved.'
};
