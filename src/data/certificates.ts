export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "BNSP & NASIONAL" | "IBM & COURSERA" | "ORACLE ACADEMY";
  year?: string;
  description: string;
  fileUrl: string;
  credentialId?: string;
  isFeatured?: boolean;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "bnsp-business-intelligence",
    title: "Sertifikasi BNSP Business Intelligence Analyst",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    category: "BNSP & NASIONAL",
    year: "2025",
    description:
      "Sertifikasi kompetensi kerja nasional resmi bidang Business Intelligence Analyst dari BNSP Republik Indonesia, memvalidasi kemampuan pengolahan data, visualisasi, dan analitik bisnis strategis.",
    fileUrl: "/certificates/Sertifikat BNSP Business Intelligence.pdf",
    isFeatured: true,
    skills: ["Business Intelligence", "Data Modeling", "Dashboard Analytics", "Standar Kompetensi Kerja Nasional"],
  },
  {
    id: "ibm-data-analyst-professional",
    title: "IBM Data Analyst Professional Certificate",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2025",
    description:
      "Sertifikasi spesialisasi analitik data profesional dari IBM yang mencakup 9 program intensif: Python, SQL Data Warehousing, Microsoft Excel, IBM Cognos Analytics, dan Final Capstone Project.",
    fileUrl: "/certificates/Coursera IBM Data Analyst Professional Certificate.pdf",
    isFeatured: true,
    skills: ["Python", "SQL", "IBM Cognos", "Excel Advanced", "Data Warehousing", "Capstone Project"],
  },
  {
    id: "mbkm-studi-independen",
    title: "Sertifikasi MSIB Kampus Merdeka — Data Analytics",
    issuer: "Kemendikbudristek & Bitlabs Academy",
    category: "BNSP & NASIONAL",
    year: "2025",
    description:
      "Sertifikat kelulusan Program Magang dan Studi Independen Bersertifikat (MSIB) Kampus Merdeka bidang Data Analytics bekerja sama dengan Bitlabs Academy dan Paper.id.",
    fileUrl: "/certificates/Sertifikasi MBKM.pdf",
    isFeatured: true,
    skills: ["Data Analytics", "B2B Payment Analytics", "Social Network Analysis", "Cohort Retention"],
  },
  {
    id: "oracle-database-programming",
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    category: "ORACLE ACADEMY",
    year: "2024",
    description:
      "Sertifikasi pemrograman basis data dari Oracle Academy yang memvalidasi keahlian sintaks SQL terstruktur, kueri relasional lanjutan, subquery, DDL, DML, dan manipulasi data skala besar.",
    fileUrl: "/certificates/Oracle Academy Database Programming.pdf",
    isFeatured: false,
    skills: ["Oracle SQL", "Relational Database", "Data Manipulation (DML)", "Database Queries"],
  },
  {
    id: "oracle-database-design",
    title: "Database Design",
    issuer: "Oracle Academy",
    category: "ORACLE ACADEMY",
    year: "2024",
    description:
      "Sertifikasi perancangan arsitektur basis data relasional dari Oracle Academy, mencakup normalisasi tabel, pemodelan konseptual & logikal (ERD), dan integritas data enterprise.",
    fileUrl: "/certificates/Oracle Academy Database Design.pdf",
    isFeatured: false,
    skills: ["Entity Relationship Diagram (ERD)", "Database Normalization", "Relational Schema", "Data Integrity"],
  },
  {
    id: "ibm-sql-data-science",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Sertifikasi penguasaan kueri database relasional tingkat lanjut, integrasi database Python DB-API, fungsi agregasi SQL, dan analisis kumpulan data cloud menggunakan SQL.",
    fileUrl: "/certificates/Coursera Databases and SQL for Data Science with Python.pdf",
    isFeatured: false,
    skills: ["SQL Data Warehousing", "Python DB-API", "Relational Databases", "Cloud Databases"],
  },
  {
    id: "ibm-python-data-science",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Sertifikasi komputasi data sains berbasis Python, mencakup tipe data, manipulasi struktur Pandas & NumPy, web scraping via BeautifulSoup, dan pemanggilan REST API.",
    fileUrl: "/certificates/Coursera Python for Data Science, AI & Development.pdf",
    isFeatured: false,
    skills: ["Python", "Pandas", "NumPy", "Web Scraping", "REST APIs"],
  },
  {
    id: "ibm-data-analysis-python",
    title: "Data Analysis with Python",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Penguasaan teknik data wrangling, eksplorasi korelasi variabel numerik, pemodelan statistik linear & polynomial regression, serta evaluasi metrik akurasi menggunakan scikit-learn.",
    fileUrl: "/certificates/Coursera Data Analysis with Python.pdf",
    isFeatured: false,
    skills: ["Exploratory Data Analysis", "Regression Modeling", "Scikit-Learn", "Model Evaluation"],
  },
  {
    id: "ibm-data-visualization-python",
    title: "Data Visualization with Python",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Perancangan visualisasi data saintifik dan representasi grafis informasi menggunakan library Matplotlib, Seaborn, Folium (peta geospasial), dan dashboard visual.",
    fileUrl: "/certificates/Coursera Data Vizualization with Python.pdf",
    isFeatured: false,
    skills: ["Matplotlib", "Seaborn", "Geospatial Folium", "Dashboard Visual"],
  },
  {
    id: "ibm-generative-ai-data-analytics",
    title: "Generative AI: Enhance your Data Analytics Career",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Penerapan teknologi Generative AI dan Prompt Engineering untuk mempercepat eksplorasi dataset, otomatisasi penulisan kueri SQL/Python, serta sintesis wawasan analitik.",
    fileUrl: "/certificates/Coursera Generative AI Enhance your Data Analytics Career.pdf",
    isFeatured: false,
    skills: ["Generative AI", "Prompt Engineering", "AI for Analytics", "Automated EDA"],
  },
  {
    id: "ibm-data-analyst-capstone",
    title: "IBM Data Analyst Capstone Project",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Proyek akhir portofolio analitik menyeluruh: pengumpulan data via API/web scraping, data wrangling, analisis SQL, visualisasi Python, dan pembuatan dashboard interaktif.",
    fileUrl: "/certificates/Coursera IBM Data Analyst Capstrone Project.pdf",
    isFeatured: false,
    skills: ["End-to-End Pipeline", "Data Wrangling", "Dashboarding", "Executive Presentation"],
  },
  {
    id: "ibm-dashboards-excel-cognos",
    title: "Data Visualization & Dashboards with Excel and Cognos",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Pembuatan dashboard performa bisnis interaktif dan visualisasi KPI korporat menggunakan Microsoft Excel dan IBM Cognos Analytics.",
    fileUrl: "/certificates/Coursera Data Visualization and Dashboards with Excel and Cognos.pdf",
    isFeatured: false,
    skills: ["IBM Cognos Analytics", "Excel Dashboards", "Pivot Charts", "KPI Reporting"],
  },
  {
    id: "ibm-excel-basics-data-analysis",
    title: "Excel Basics for Data Analysis",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Pembersihan data tabular, formulasi fungsi logika, rumus pencarian lanjutan (VLOOKUP/XLOOKUP), dan pemodelan Pivot Tables untuk analitik bisnis.",
    fileUrl: "/certificates/Coursera Excel Basics for Data Analysis.pdf",
    isFeatured: false,
    skills: ["Microsoft Excel", "VLOOKUP / XLOOKUP", "Pivot Tables", "Data Cleansing"],
  },
  {
    id: "ibm-career-guide-interview",
    title: "Data Analyst Career Guide & Interview Preparation",
    issuer: "IBM & Coursera",
    category: "IBM & COURSERA",
    year: "2024",
    description:
      "Kesiapan karir profesional, telaah studi kasus analitik industri riil, struktur presentasi insight, dan metodologi pemecahan masalah data teknis.",
    fileUrl: "/certificates/Coursera Data Analyst Career Guide and Interview Preparation.pdf",
    isFeatured: false,
    skills: ["Technical Interview Readiness", "Case Study Frameworks", "Stakeholder Communication"],
  },
];

