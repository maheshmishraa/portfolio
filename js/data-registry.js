/**
 * js/data-registry.js
 * The central "Source of Truth" for all portfolio content.
 * This separation allows for high-scale architectural growth.
 */

const MAHESH_DATA = {
  stats: {
    projects: 30,
    experience_years: 5,
    domains: 5,
    efficiency_lift: "40%",
    hours_saved: 15
  },
  
  timeline: [
    {
      type: "Education",
      title: "10th Grade — CBSE",
      org: "Rotary Public School, Delhi",
      date: "2011 – 2012",
      detail: "Score: 8.8 / 10",
      logo: "assets/images/rotarypublicschool_logo.jpeg",
      cat: "edu"
    },
    {
      type: "Education",
      title: "12th Grade — CBSE (PCB)",
      org: "Rotary Public School, Delhi",
      date: "2013 – 2014",
      detail: "Score: 86.0 %",
      logo: "assets/images/rotarypublicschool_logo.jpeg",
      cat: "edu"
    },
    {
      type: "Undergraduate",
      title: "B.Tech — Biotechnology",
      org: "Amity University, Noida",
      date: "2015 – 2019",
      detail: "CGPA: 6.84 / 10",
      logo: "assets/images/Amity_University_logo.png",
      cat: "uni"
    },
    {
      type: "Work Experience",
      title: "Senior Business Development Associate",
      org: "Zunroof Tech Pvt Ltd",
      date: "Mar 2019 – Dec 2019",
      detail: "• Achieved a 30% reduction in project turnaround time (TAT) via process refinement.<br>• Spearheaded cross-functional teams to build custom client proposals.<br>• Improved project delivery speed by 35% through enhanced collaboration.",
      logo: "assets/images/Zunroof_tech_logo.jpeg",
      cat: "work"
    },
    {
      type: "Work Experience",
      title: "Sr. Research Associate",
      org: "WNS Global Services",
      date: "Feb 2020 – Aug 2022",
      detail: "• Awarded \"Excel@Work\" for 40% increase in reporting tool efficiency.<br>• Validated 51,000+ construction records via high-integrity ETL cleaning.<br>• Maintained critical Fitch Connect databases for Infrastructure and Pharma sectors.",
      logo: "assets/images/wns_logo.png",
      cat: "wns"
    },
    {
      type: "Work Experience",
      title: "Analyst",
      org: "WNS Global Services",
      date: "Aug 2022 – Apr 2024",
      detail: "• Improved project timeline accuracy by 18% across global sectors.<br>• Identified 10+ critical life-cycle bottlenecks via predictive trend analysis.<br>• Managed analytics for 30,000+ records involving 31 complex variables.",
      logo: "assets/images/wns_logo.png",
      cat: "wns"
    },
    {
      type: "Currently Pursuing",
      title: "PGDM — Big Data Analytics",
      org: "Goa Institute of Management",
      date: "2025 – 2027",
      detail: "• Senior Placement Coordinator: Leading interactions with industry heads.<br>• Focused on Big Data Analytics, Strategy, and Predictive Modeling.",
      logo: "assets/images/GIM_Logo.png",
      cat: "gim",
      current: true
    }
  ],

  skills: [
    {
      category: "Data Science & ML",
      icon: "🔬",
      items: [
        { name: "Python / R", val: 90, color: "#38D9F5" },
        { name: "Machine Learning / LLMs", val: 85, color: "#5666BF" },
        { name: "Gen-AI / Neural Networks", val: 75, color: "#5670BF" },
        { name: "Statistics / Cloud Computing", val: 82, color: "#72e8f8" }
      ]
    },
    {
      category: "Data Engineering",
      icon: "🗄️",
      items: [
        { name: "SQL", val: 95, color: "#38D9F5" },
        { name: "Apache Spark", val: 78, color: "#5666BF" },
        { name: "Azure / Databricks", val: 72, color: "#5670BF" },
        { name: "ETL / ELT", val: 88, color: "#72e8f8" }
      ]
    },
    {
      category: "Analytics & BI",
      icon: "📊",
      items: [
        { name: "Power BI", val: 95, color: "#38D9F5" },
        { name: "DAX / M Query", val: 90, color: "#5666BF" },
        { name: "Tableau", val: 80, color: "#5670BF" },
        { name: "Data Storytelling", val: 88, color: "#72e8f8" }
      ]
    }
  ]
};
