// Helper to get image path with base URL for GitHub Pages
const getImagePath = (path) => {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
};

export const profile = {
  name: "Karim Elkobrossy",
  role: "Machine Learning Engineer & Author",
  headline: "Welcome! Dive into my digital playground",
  statements: [
    "3+ years of hands-on experience in cloud computing, ML, and software engineering. Strong foundation in computer science principles and large-scale system design.",
    "Experienced in building scalable cloud-native applications, integrating machine learning pipelines, and optimizing LLM-based systems. Passionate about research-driven development and transforming complex AI concepts into high-impact solutions.",
  ],
  avatar: getImagePath("/images/karim-elkobrossy.jpg"),
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/karim-elkobrossy/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/karim-elkobrossy",
      icon: "github",
    },
  ],
};

export const projectGroups = [
  {
    id: "open-source-research",
    title: "Open Source & Research Projects",
    subtitle:
      "Contributions to open-source medical AI evaluation frameworks and research initiatives.",
    accent: "OPEN SOURCE & RESEARCH PROJECTS",
    projects: [
      {
        id: "medagentbench-evaluation",
        title: "Advanced Evaluation Framework for Medical AI Agents",
        image: getImagePath("/images/Agentified-MedAgentBench.jpg"),
        imageAlt: "MedAgentBench evaluation framework architecture",
        tags: [
          "Python",
          "LLM",
          "Medical AI",
          "MCP",
          "A2A Protocol",
          "Open Source",
          "Research",
        ],
        description:
          "Extended Stanford MedAgentBench with A2A protocol & MCP tool discovery; improved GPT-4o accuracy from ~64% to 89.3% on clinical tasks.",
        highlights: [
          {
            label: "Performance Achievement",
            detail:
              "Achieved substantial performance lift: boosted GPT-4o pass rate from ~64% (original MedAgentBench) to 89.3% on 300 clinical tasks and introduced 30 new multi-step reasoning tasks where GPT-4o reaches ~50%.",
          },
          {
            label: "Architecture",
            detail:
              "Architected modular evaluation framework for LLM-based medical agents using standardized Agent-to-Agent (A2A) communication protocol and Model Context Protocol (MCP) for dynamic tool discovery, enabling plug-and-play agent testing without infrastructure changes.",
          },
          {
            label: "Evaluation System",
            detail:
              "Transformed pass/fail evaluation into comprehensive diagnostic system with two-level failure taxonomy.",
          },
          {
            label: "Technical Implementation",
            detail:
              "Designed domain-specific MCP server with Pydantic-typed FHIR tools, single source of truth for tasks/prompts/tools, and non-mutating POST logging — allowing reproducible, parallel evaluation of 330+ clinical tasks without database state contamination.",
          },
        ],
        links: [
          {
            label: "GitHub Repository",
            url: "https://github.com/saleh-SHA/Agentify-MedAgentBench",
          },
        ],
      },
    ],
  },
  {
    id: "ml-data-science",
    title: "Machine Learning & Data Science",
    subtitle:
      "Explorations in data efficiency, predictive modelling, and feature engineering.",
    accent: "Machine Learning / Data Science Projects",
    projects: [
      {
        id: "journal-bearing-data-pruning",
        title:
          "Data Pruning for Cost-Efficient Training in Tribological Analysis on Journal Bearing Systems – Rolls Royce",
        status: "Upcoming publication",
        image: getImagePath("/images/journal-bearing.jpg"),
        imageAlt: "Rendering of journal bearing components",
        tags: ["Python", "Deep Learning", "Autoencoder", "DBSCAN", "Research"],
        description:
          "A research initiative focused on reducing training costs for tribological analysis while maintaining predictive accuracy.",
        highlights: [
          {
            label: "Literature gap filling",
            detail:
              "Designed new algorithms to address instance reduction gaps in regression tasks.",
            bullets: [
              "Novel multi-tasking autoencoder",
              "Novel adaptive DBSCAN algorithm",
              "Modification of an existing Selesup algorithm",
            ],
          },
          {
            label: "Algorithmic comparison",
            detail:
              "Benchmarked the new methods against random sampling and the full dataset to quantify cost savings.",
          },
          {
            label: "Pruning percentage analysis",
            detail:
              "Studied the impact of varying pruning levels on the regression autoencoder, random sampling, and the complete dataset.",
          },
          {
            label: "Deep learning for Reynold's equation",
            detail:
              "Applied deep learning approaches to analytically solve Reynold’s equation using G̈umbel’s assumptions.",
          },
        ],
        links: [
          {
            label: "Academic paper",
            url: "https://drive.google.com/file/d/1KN4C_ZVaGKRUtugYXLrr9thf3wXW1MII/view?usp=sharing",
          },
          {
            label: "Jupyter notebooks",
            url: "https://github.com/karim-elkobrossy/Data-Pruning-for-Cost-Efficient-Training-in-Tribological-Analysis-on-Journal-Bearing",
          },
        ],
      },
      {
        id: "tanzania-water-pumps",
        title:
          "Predictive modelling for the forecasting of water pumps functionality (Tanzania case study)",
        image: getImagePath("/images/water-pump.png"),
        imageAlt: "Illustration of a water pump in Tanzania",
        tags: [
          "Python",
          "Machine Learning",
          "Deep Learning",
          "Gradient Boosting",
          "Data Science",
        ],
        description:
          "A predictive modelling approach to accurately forecast the operational status of water pumps across Tanzania, addressing the challenges of imbalanced data.",
        highlights: [
          {
            label: "Methodology",
            detail:
              "Combined deep learning and gradient boosting with targeted preprocessing and feature engineering to handle class imbalance.",
          },
        ],
        links: [
          {
            label: "Academic paper",
            url: "https://drive.google.com/file/d/154TG2c9ADL6gLVpce3BFuk0yHQUFrsE2/view?usp=sharing",
          },
          {
            label: "Jupyter notebook",
            url: "https://github.com/Karim977/Predictive-modelling-for-the-forecasting-of-water-pumps-functionality-Tanzania-case-study-",
          },
        ],
      },
      {
        id: "feature-selection-comparison",
        title: "A Comparative Study of Feature Selection Techniques",
        image: getImagePath("/images/big-data.jpg"),
        imageAlt: "Abstract visualization of big data",
        tags: [
          "Python",
          "Machine Learning",
          "Feature Selection",
          "Big Data",
          "Research",
        ],
        description:
          "Investigated how different feature selection strategies influence model performance in large-scale machine learning scenarios.",
        links: [
          {
            label: "Academic paper",
            url: "https://drive.google.com/file/d/152aFstlMTx96BDthN5o489WJWm2U8sBV/view?usp=sharing",
          },
          {
            label: "Jupyter notebook",
            url: "https://github.com/Karim977/A-Comparative-Study-of-Feature-Selection-Techniques",
          },
        ],
      },
    ],
  },
  {
    id: "programming-web",
    title: "Programming & Web Experiences",
    subtitle:
      "Interactive builds spanning gameplay and full-stack development.",
    accent: "Programming / Web Development Projects",
    projects: [
      {
        id: "ai-uno-game",
        title: "AI-powered UNO game",
        image: getImagePath("/images/uno-logo.png"),
        imageAlt: "UNO game logo",
        tags: ["Python", "OOP", "AI", "Game Development"],
        highlights: [
          {
            label: "Gameplay",
            bullets: [
              "AI-powered UNO game with roughly 1000 lines of Python OOP code",
              "Three intelligent bots and one human player",
              "Fully functioning experience with smooth animations",
            ],
          },
        ],
        links: [
          {
            label: "Game repository",
            url: "https://github.com/Karim977/UNO-GAME",
          },
        ],
      },
      {
        id: "police-workforce-site",
        title: "Police Workforce Website",
        image: getImagePath("/images/police.jpg"),
        imageAlt: "Police patrol car at night",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full Stack"],
        description:
          "A complete police workforce platform built with HTML, CSS, JavaScript, PHP, and MySQL, accompanied by technical and user guides.",
        links: [
          {
            label: "Website repository",
            url: "https://github.com/Karim977/Police-Workforce-Website",
          },
        ],
      },
    ],
  },
];
