// ============================================================
//  PORTFOLIO CONFIGURATION FILE
//  Edit ONLY this file to update your portfolio content.
//  No need to touch index.html or style.css
// ============================================================

const PORTFOLIO_CONFIG = {

    // ── PERSONAL INFO ─────────────────────────────────────────
    personal: {
        name: "Nitin Verma",
        title: "Data Analyst",
        tagline: "Turning raw data into meaningful decisions",
        email: "nitinrajput9557444@gmail.com",
        phone: "+91-7983461172",           // e.g. "+91 9557444XXX"
        location: "Agra Uttar Pradesh",        // e.g. "Agra, Uttar Pradesh"
        linkedin: "https://www.linkedin.com/in/nitin-verma-1a2361311/",        // full URL e.g. "https://linkedin.com/in/yourprofile"
        github: "https://github.com/nitinrajput9557444",          // full URL e.g. "https://github.com/yourhandle"
        resumeLink: "",      // link to your resume PDF if hosted somewhere
        about: `Aspiring Data Analyst with hands-on experience in Excel, SQL, and Power BI. Developed interactive Sales Dashboards to analyze sales trends, daily performance, and profit insights. Skilled in data cleaning, visualization, and generating insights to help businesses make data-driven decisions.`,
    },

    // ── EDUCATION ─────────────────────────────────────────────
    education: [
        {
            degree: "Bachelor of Commerce",
            field: "Accounting & Finance",
            institution: "Dr. Bhim Rao Ambedkar University (DBRAU)",
            year: "2021 - 2024",
            grade: "6.5/10",         // e.g. "7.8 CGPA" or "First Division"
            notes: "",
        },
        {
            degree: "Intermediate",
            field: "Commerce",
            institution: "M. D. Jain Inter College",
            year: "2019 - 2020",
            grade: "70%",         // e.g. "7.8 CGPA" or "First Division"
            notes: "",
        },
    ],

    // ── EXPERIENCE ────────────────────────────────────────────
    // Leave this array empty [] if you have no experience yet
    experience: [
        // {
        //   role: "Junior Data Analyst",
        //   company: "ABC Corp",
        //   duration: "Jan 2024 – Present",
        //   location: "Remote",
        //   points: [
        //     "Built automated Excel dashboards reducing reporting time by 40%",
        //     "Wrote complex SQL queries for monthly business reviews",
        //   ],
        // }
    ],

    // ── PROJECTS ──────────────────────────────────────────────
    projects: [
        {
            title: "Coffee Shop Sales Dashboard",
            tag: "Fresher Project",
            tools: ["Excel", "Power BI"],
            description: "Analyzed coffee shop sales and customer behavior using real business metrics to uncover actionable insights.",
            highlights: [
                "Total Sales: $698K overall revenue",
                "Footfall: 149K customers",
                "Avg Bill per Person: $4.69",
                "Avg Orders per Person: 1.44",
            ],
            analysis: [
                "Hour-wise order trends to identify peak & low business hours",
                "Size-wise order distribution (Small / Regular / Large)",
                "Category-wise sales contribution for top-selling products",
            ],
            link: "",           // live demo or GitHub link
            image: "",          // path or URL to screenshot
        },
        {
            title: "E-Commerce Sales Insights & Product Performance",
            tag: "Analytics Project",
            tools: ["Power BI", "SQL", "Excel"],
            description: "Comprehensive e-commerce dashboard tracking revenue, cancellations, and product performance across categories and states.",
            highlights: [
                "Total Revenue: ₹1.25 Billion",
                "Average Order Value: ₹1,12,850",
                "Total Orders Analysed: 15.69K",
                "Lost Revenue (Cancellations): ₹525.42M",
                "Cancellation Rate: 29.72%",
            ],
            analysis: [
                "Revenue breakdown by product, category, and state",
                "Top-performing categories: Laptop & Mobile",
                "Year & quarter-wise performance trends",
                "Interactive filters for deeper drill-down",
            ],
            link: "",
            image: "",
        },
    ],

    // ── SKILLS ────────────────────────────────────────────────
    // Each skill has a name, category, and proficiency 1–100
    skills: [
        { name: "Microsoft Excel", category: "Tools", level: 90 },
        { name: "Power BI Desktop", category: "Tools", level: 85 },
        { name: "Power BI Service", category: "Tools", level: 75 },
        { name: "SQL", category: "Languages", level: 80 },
        { name: "Python", category: "Languages", level: 60 },
        { name: "Data Cleaning", category: "Skills", level: 88 },
        { name: "Data Visualization", category: "Skills", level: 85 },
        { name: "Dashboard Design", category: "Skills", level: 83 },
        { name: "KPI Analysis", category: "Skills", level: 80 },
        { name: "Data Preprocessing", category: "Skills", level: 82 },
        { name: "Report Builder", category: "Tools", level: 70 },
        { name: "Data Engineering", category: "Skills", level: 55 },
    ],

    // ── CERTIFICATIONS / ACHIEVEMENTS ─────────────────────────
    // Leave empty [] to hide this section
    certifications: [
        // { title: "Google Data Analytics Certificate", issuer: "Google / Coursera", year: "2024", link: "" },
        // { title: "SQL for Data Science",              issuer: "UC Davis / Coursera", year: "2024", link: "" },
    ],

    // ── THEME ─────────────────────────────────────────────────
    theme: {
        accent: "#00d4aa",       // primary accent color
        accentAlt: "#0099ff",    // secondary accent / gradient
        darkBg: "#0a0f1e",       // main background
        cardBg: "#111827",       // card background
    },
};