export const profile = {
  name: 'Karim Elkobrossy',
  role: 'Machine Learning Engineer & Author',
  headline: 'Welcome! Dive into my digital playground',
  statements: [
    'A Machine Learning Engineer and Author who dives into complex projects with a strategic mindset and innovative problem-solving.',
    'Passionate about continuous learning and driven by efficiency and creativity.'
  ],
  avatar: '/images/karim-elkobrossy.jpg',
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karim-elkobrossy/'
    }
  ]
};

export const projectGroups = [
  {
    id: 'ml-data-science',
    title: 'Machine Learning & Data Science',
    subtitle: 'Explorations in data efficiency, predictive modelling, and feature engineering.',
    accent: 'Machine Learning / Data Science Projects',
    projects: [
      {
        id: 'journal-bearing-data-pruning',
        title:
          'Data Pruning for Cost-Efficient Training in Tribological Analysis on Journal Bearing Systems – Rolls Royce',
        status: 'Upcoming publication',
        image: '/images/journal-bearing.jpg',
        imageAlt: 'Rendering of journal bearing components',
        description:
          'A research initiative focused on reducing training costs for tribological analysis while maintaining predictive accuracy.',
        highlights: [
          {
            label: 'Literature gap filling',
            detail:
              'Designed new algorithms to address instance reduction gaps in regression tasks.',
            bullets: [
              'Novel multi-tasking autoencoder',
              'Novel adaptive DBSCAN algorithm',
              'Modification of an existing Selesup algorithm'
            ]
          },
          {
            label: 'Algorithmic comparison',
            detail:
              'Benchmarked the new methods against random sampling and the full dataset to quantify cost savings.'
          },
          {
            label: 'Pruning percentage analysis',
            detail:
              'Studied the impact of varying pruning levels on the regression autoencoder, random sampling, and the complete dataset.'
          },
          {
            label: "Deep learning for Reynold's equation",
            detail:
              'Applied deep learning approaches to analytically solve Reynold’s equation using G̈umbel’s assumptions.'
          }
        ],
        links: [
          {
            label: 'Academic paper',
            url: 'https://drive.google.com/file/d/1KN4C_ZVaGKRUtugYXLrr9thf3wXW1MII/view?usp=sharing'
          },
          {
            label: 'Jupyter notebooks',
            url: 'https://github.com/karim-elkobrossy/Data-Pruning-for-Cost-Efficient-Training-in-Tribological-Analysis-on-Journal-Bearing'
          }
        ]
      },
      {
        id: 'tanzania-water-pumps',
        title: 'Predictive modelling for the forecasting of water pumps functionality (Tanzania case study)',
        image: '/images/water-pump.png',
        imageAlt: 'Illustration of a water pump in Tanzania',
        description:
          'A predictive modelling approach to accurately forecast the operational status of water pumps across Tanzania, addressing the challenges of imbalanced data.',
        highlights: [
          {
            label: 'Methodology',
            detail:
              'Combined deep learning and gradient boosting with targeted preprocessing and feature engineering to handle class imbalance.'
          }
        ],
        links: [
          {
            label: 'Academic paper',
            url: 'https://drive.google.com/file/d/154TG2c9ADL6gLVpce3BFuk0yHQUFrsE2/view?usp=sharing'
          },
          {
            label: 'Jupyter notebook',
            url: 'https://github.com/Karim977/Predictive-modelling-for-the-forecasting-of-water-pumps-functionality-Tanzania-case-study-'
          }
        ]
      },
      {
        id: 'feature-selection-comparison',
        title: 'A Comparative Study of Feature Selection Techniques',
        image: '/images/big-data.jpg',
        imageAlt: 'Abstract visualization of big data',
        description:
          'Investigated how different feature selection strategies influence model performance in large-scale machine learning scenarios.',
        links: [
          {
            label: 'Academic paper',
            url: 'https://drive.google.com/file/d/152aFstlMTx96BDthN5o489WJWm2U8sBV/view?usp=sharing'
          },
          {
            label: 'Jupyter notebook',
            url: 'https://github.com/Karim977/A-Comparative-Study-of-Feature-Selection-Techniques'
          }
        ]
      }
    ]
  },
  {
    id: 'programming-web',
    title: 'Programming & Web Experiences',
    subtitle: 'Interactive builds spanning gameplay and full-stack development.',
    accent: 'Programming / Web Development Projects',
    projects: [
      {
        id: 'ai-uno-game',
        title: 'AI-powered UNO game',
        image: '/images/uno-logo.png',
        imageAlt: 'UNO game logo',
        highlights: [
          {
            label: 'Gameplay',
            bullets: [
              'AI-powered UNO game with roughly 1000 lines of Python OOP code',
              'Three intelligent bots and one human player',
              'Fully functioning experience with smooth animations'
            ]
          }
        ],
        links: [
          {
            label: 'Game repository',
            url: 'https://github.com/Karim977/UNO-GAME'
          }
        ]
      },
      {
        id: 'police-workforce-site',
        title: 'Police Workforce Website',
        image: '/images/police.jpg',
        imageAlt: 'Police patrol car at night',
        description:
          'A complete police workforce platform built with HTML, CSS, JavaScript, PHP, and MySQL, accompanied by technical and user guides.',
        links: [
          {
            label: 'Website repository',
            url: 'https://github.com/Karim977/Police-Workforce-Website'
          }
        ]
      }
    ]
  }
];
