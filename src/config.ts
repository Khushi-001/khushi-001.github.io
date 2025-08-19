export const siteConfig = {
  name: "Khushi",
  title: "Software Engineer | Data Analyst",
  description: "Portfolio website of Khushi",
  accentColor: "#1d4ed8",
  social: {
    email: "kj801310@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushi-700399240/",
    github: "https://github.com/Khushi-001",
  },
  aboutMe:
  "I am a Computer Science Engineering graduate with hands-on experience in Data Science, Machine Learning, Backend Development, and Data Analytics. I have built projects like Heart Disease Prediction Model, Stock Market Prediction Web App, EDA on Google Play Store, and an AI-powered Diet Recommendation System. Skilled in Python, Flask, SQL, Power BI, and data visualization, I enjoy solving real-world problems by combining data-driven insights with software development. Currently exploring full-stack development and AI-powered applications.",

skills: [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Flask",
  "MySQL",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS",
  "Power BI",
  "Git/GitHub",
  "Docker",
  "Django",
],

  projects: [
  {
    name: "NutriScan – Food Analyzer Web App",
    description:
      "Django-based web app integrated with OCR (Tesseract) to scan packaged food labels and analyze nutritional data. Provides health insights with emoji-based feedback, stores results in MongoDB, and deployed on Render for scalable access.",
    link: "https://github.com/yourusername/NutriScan", 
    skills: ["Python", "Django", "Tesseract OCR", "MongoDB", "HTML", "CSS", "Docker", "REST API"],
  },
  {
    name: "Stock Market Prediction Web App",
    description:
      "Flask-based web application that predicts stock trends using machine learning models. Integrated Pandas for historical data preprocessing, Scikit-learn for regression/classification models, and deployed the app with interactive visualizations.",
    link: "https://github.com/Khushi-001/Stock-Market-Prediction-Web-App", 
    skills: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib", "HTML", "CSS", "Docker", "REST API"],
  },
  {
    name: "Heart Disease Prediction ML Model",
    description:
      "Machine learning model trained on patient health data to predict heart disease likelihood with 86% accuracy. Implemented Logistic Regression and Random Forest, visualized results with Matplotlib, and documented the workflow in Jupyter Notebook.",
    link: "https://github.com/Khushi-001/Heart-Disease-Prediction-Project", 
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "AtliQ Hospitality Project",
    description:
      "Designed an interactive dashboard in Power BI to visualize KPIs for 20+ hotel properties, reducing reporting time by 30%. Extracted and transformed large datasets using SQL and applied complex DAX queries for real-time performance monitoring. Enabled regional comparison of metrics like occupancy rate, average daily rate (ADR), and revenue per available room (RevPAR).
",
    link: "https://github.com/Khushi-001/Hospitality-Dashboard-Project", 
    skills: ["Power BI", "DAX", "Excel", "MySQL"],
  },
  {
    name: "EDA on Google Play Store Dataset",
    description:
      "Performed exploratory data analysis on Google Play Store dataset with Pandas and Matplotlib to uncover trends in app ratings, installs, categories, and monetization strategies. Delivered actionable insights through data visualization.",
    link: "https://github.com/Khushi-001/EDA-on-Google-Playstore ", 
    skills: ["Python", "Pandas", "Matplotlib", "NumPy"],
  },
],

experience: [
  {
    company: "UNO MINDA",
    title: "Python Developer Intern",
    dateRange: "Jan 2025 - July 2025", 
    bullets: [
      "Developed and maintained internal tools using Python, improving automation and team efficiency.",
    "Built and debugged REST APIs for seamless data exchange between services.",
"Applied object-oriented programming (OOP) principles to write clean, modular backend code.",
"Used Git for version control and collaborated with cross-functional teams in Agile sprints.",
"Gained practical exposure to the software development lifecycle, from coding to testing and deployment.",
,
    ],
  },
  {
    company: "Unified Mentors Pvt Ltd",
    title: "Data Analyst Intern",
    dateRange: "Jun 2024 - Aug 2024",
    bullets: [
      "Designed and developed interactive dashboards using Microsoft Power BI, incorporating DAX functions to perform advanced calculations and visualize trends, resulting in improved stakeholder insights.",
"Built a machine learning model for heart disease prediction using Python, involving data preprocessing steps like handling missing values, feature scaling, and encoding categorical variables.",
"Evaluated model performance using metrics such as precision, recall, F1 score, and accuracy, achieving a balanced model with high predictive reliability.",
"Collaborated with a team of analysts to present findings to stakeholders, translating complex data insights into actionable business strategies.",

    ],
  },
],
  education: [
    {
      school: "University Institute Of Engineering And Technology",
      degree: "Bachelor of Technology in Computer Science Engineering (CSE)",
      dateRange: "2021 - 2025",
      achievements: [
        "Maintained 8.3 GPA throughout semesters",
      ],
    },
  ],
};
