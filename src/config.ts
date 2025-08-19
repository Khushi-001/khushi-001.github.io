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
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
  {
    name: "NutriScan – Food Analyzer Web App",
    description:
      "Django-based web app integrated with OCR (Tesseract) to scan packaged food labels and analyze nutritional data. Provides health insights with emoji-based feedback, stores results in MongoDB, and deployed on Render for scalable access.",
    link: "https://github.com/yourusername/NutriScan", 
    skills: ["Python", "Django", "Tesseract OCR", "MongoDB", "Render"],
  },
  {
    name: "Stock Market Prediction Web App",
    description:
      "Flask-based web application that predicts stock trends using machine learning models. Integrated Pandas for historical data preprocessing, Scikit-learn for regression/classification models, and deployed the app with interactive visualizations.",
    link: "https://github.com/yourusername/Stock-Market-Prediction", 
    skills: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    name: "Heart Disease Prediction ML Model",
    description:
      "Machine learning model trained on patient health data to predict heart disease likelihood with 86% accuracy. Implemented Logistic Regression and Random Forest, visualized results with Matplotlib, and documented the workflow in Jupyter Notebook.",
    link: "https://github.com/yourusername/Heart-Disease-Prediction", 
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "AtliQ Hospitality Project",
    description:
      "Developed a Power BI dashboard to analyze KPIs across 20+ hotel properties. Utilized MySQL for transformations, DAX for advanced calculations, and Excel for preprocessing to deliver insights into revenue, occupancy, and customer trends.",
    link: "https://github.com/yourusername/AtliQ-Hospitality", 
    skills: ["Power BI", "DAX", "Excel", "MySQL"],
  },
  {
    name: "EDA on Google Play Store Dataset",
    description:
      "Performed exploratory data analysis on Google Play Store dataset with Pandas and Matplotlib to uncover trends in app ratings, installs, categories, and monetization strategies. Delivered actionable insights through data visualization.",
    link: "https://github.com/yourusername/EDA-Google-Playstore", 
    skills: ["Python", "Pandas", "Matplotlib", "NumPy"],
  },
],

experience: [
  {
    company: "UNO MINDA",
    title: "Intern",
    dateRange: "Jan 2025 - Feb 2025", 
    bullets: [
      "Worked on data-driven analysis and reporting for manufacturing operations.",
      "Assisted in automation of reporting workflows using Python and Excel.",
      "Collaborated with engineering team to explore applications of data insights in process optimization.",
    ],
  },
  {
    company: "Unified Mentors Pvt Ltd",
    title: "Data Analyst Intern",
    dateRange: "Jun 2024 - Aug 2024",
    bullets: [
      "Cleaned and maintained large datasets using Excel and Power BI, ensuring accuracy in reports.",
      "Automated performance reports with Excel formulas and Power BI dashboards.",
      "Collaborated with team members to analyze data trends and deliver business insights.",
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
