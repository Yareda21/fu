import {
    Code,
    Terminal,
    BadgeDollarSign,
    Database,
    ChartBar,
    Section,
} from "lucide-react";

export const modules = [
    // DM
    {
        name: "Digital Marketing",
        icon: <BadgeDollarSign className="w-6 h-6" />,
        resources: [
            {
                title: "Digital Marketing Course Outline",
                type: "PDF",
                url: "https://www.mediafire.com/file/7p446jkqfh350jo/DM_course_Outline.pdf/file",
                description:
                    "Overview of topics covered in the digital marketing course",
            },
            {
                title: "Digital Marketing Notes",
                type: "PDF",
                url: "https://www.mediafire.com/file/hugxm1id3c8iw1x/Module_Doc.pdf/file",
                description:
                    "Detailed notes on various digital marketing concepts",
            },
            {
                title: "Content Marketing Docs",
                type: "PDF",
                url: "https://www.mediafire.com/file/3y6ikcexvjoocw9/Content_Marketing_2.pdf/file",
                description:
                    "Documentation on content marketing strategies and techniques",
            },
            {
                title: "Social media marketing Notes",
                type: "rar",
                url: "https://www.mediafire.com/file/qfs2cgt7nz4vn86/Social_Media_Strategy.zip/file",
                description: "Documentation on social media platforms strategy",
            },
            {
                title: "Final Project",
                type: "PDF",
                url: "https://www.mediafire.com/file/bb4nasjgatt5wz9/Final_Project_2.pdf/file",
                description:
                    "Details and guidelines for the final digital marketing project",
            },
        ],
    },
    // Front End
    {
        name: "Front-End Development",

        icon: <Code className="w-6 h-6" />,
        resources: [
            {
                title: "HTML5 and CSS3 Fundamentals",
                url: "https://www.mediafire.com/file/k68vtkdecdt71iu/Content_Marketing.docx/file",
                type: "PDF",
                description: "Comprehensive guide to modern HTML and CSS",
            },
            {
                title: "CSS Cheatsheet",
                url: "https://www.mediafire.com/file/9f5xxhw7nlr1b39/csscheatsheet.pdf/file",
                type: "PDF",
                description:
                    "Cheat codes for CSS, use this and memorize a lot of them",
            },
            {
                title: "HTML Cheatsheet",
                url: "https://www.mediafire.com/file/pl4ec4ozjtdpu58/HTML-Cheat-Sheet_2.pdf/file",
                type: "PDF",
                description:
                    "Cheat codes for HTML, use this and memorize a lot of them",
            },
            {
                title: "JavaScript Handout",
                type: "PDF",
                url: "https://www.mediafire.com/file/gq5xkrfgkns3i0j/JS_Notes.pdf/file",
                description: "Deep dive into ES6+ features and best practices",
            },
            {
                title: "React - Component Based Architecture",
                type: "Code",
                url: "#",
                description: "Hands-on workshop for mastering React Hooks",
            },
        ],
    },
    // Backend
    {
        name: "Back-End Development",
        icon: <Terminal className="w-6 h-6" />,
        resources: [
            {
                title: "Node.js and Express.js Guide",
                type: "PDF",
                description: "Building RESTful APIs with Node.js and Express",
            },
            {
                title: "Python Django Tutorial",
                type: "Video",
                description: "Creating web applications with Django framework",
            },
            {
                title: "GraphQL API Design",
                type: "Code",
                description: "Best practices for designing GraphQL APIs",
            },
        ],
    },
    // MySQL
    {
        name: "DBMS using MySQL ",
        icon: <Database className="w-6 h-6" />,
        resources: [
            {
                title: "MySQL Course Outline",
                type: "PDF",
                url: "https://www.mediafire.com/file/3ciwbbkn1z6jh73/MySQL_Course_Outline.pdf/file",
                description: "Overview of topics covered in the MySQL course",
            },
            {
                title: "MySQL Principles and Codes",
                type: "PDF",
                url: "https://www.mediafire.com/file/4b2xupekocv0hu7/MySQL_Principles_and_Codes.pdf/file",
                description: "Detailed notes on MySQL concepts and commands",
            },
            {
                title: "MySQL Exercise 1",
                type: "PDF",
                url: "https://www.mediafire.com/file/u2wbtzcrm6s3lhv/MySQL_Exercise_1_.pdf/file",
                description: "Quick reference for commonly used MySQL commands",
            },
            {
                title: "MySQL Exercise 2",
                type: "PDF",
                url: "https://www.mediafire.com/file/k6kilpznqf1vygi/MySQL_Exercise_2.pdf/file",
                description: "Quick reference for commonly used MySQL commands",
            },
            {
                title: "MySQL Sample Codes",
                type: "PDF",
                url: "https://github.com/Yareda21/MySQL_Sample_Codes",
                description:
                    "Examples of MySQL queries and database operations",
            },
        ],
    },
    // Introduction to Python
    {
        name: "Introduction to Python",
        icon: <Section className="w-6 h-6" />,
        resources: [
            {
                title: "Basic Python Course Outline",
                type: "PDF",
                url: "https://www.mediafire.com/file/zdbechxcfpaip3o/Introduction_To_Python_Course_outline.pdf/file",
                description:
                    "Overview of topics covered in the basic Python course",
            },
            {
                title: "Python Notes",
                type: "PDF",
                description: "Detailed notes on Python programming concepts",
            },
            {
                title: "Python Commands Short Notes",
                type: "PDF",
                description:
                    "Quick reference for commonly used Python commands",
            },
            {
                title: "Python Sample Codes",
                type: "URL",
                url: "",
                description:
                    "Examples of Python code for various programming tasks",
            },
        ],
    },

    // Microsoft BI
    {
        name: "Microsoft Power BI",
        icon: <ChartBar className="w-6 h-6" />,
        resources: [
            {
                title: "Power BI Course Outline",
                type: "PDF",
                url: "https://www.mediafire.com/file/apna5quoek8xaw0/BI_Course_Outline.pdf/file",
                description: "Overview of topics covered in Microsoft Power BI",
            },
            {
                title: "Introduction Files and Exercises",
                type: "ZIP",
                url: "https://www.mediafire.com/file/i0y5sl9az35ehjq/Intro.zip/file",
                description:
                    "Power Point File, Exercise files and Input data for Power BI",
            },
            {
                title: "Data Transform and Columns",
                type: "PDF",
                url: "https://www.mediafire.com/file/bk8izyrhxkxcg5z/2_Conditional_and_Unconditional_Col.zip/file",
                description:
                    "Quick reference for commonly used Transform Methods and deep dive to columns",
            },
            {
                title: "Data Modeling",
                type: "rar",
                url: "https://www.mediafire.com/file/y32m1lp4we4qo72/3_Modeling.zip/file",
                description:
                    "Quick reference for how tables are connected and models are created",
            },
            {
                title: "Intro to DAX",
                type: "zip",
                url: "https://www.mediafire.com/file/nrywqsuuw6dole4/4_Intro_To_DAX.zip/file",
                description:
                    "All files for data analysis expressions with exercises packed",
            },
            {
                title: "Intro to Visualization",
                type: "zip",
                url: "https://www.mediafire.com/file/1a6t6kmom9qdpuz/5_Visualization.zip/file",
                description:
                    "Quick reference for commonly used Transform Methods and deep dive to columns",
            },
        ],
    },

    // DA using Python
    {
        name: "Data Analysis and Visualization using Python",
        icon: <ChartBar className="w-6 h-6" />,
        resources: [
            {
                title: "Data Analysis and Visualization using Python",
                type: "Folder",
                url: "https://www.mediafire.com/folder/coostlesg36tf/Data+Analysis+and+Visualization+using+Python",
                description:
                    "Overview of topics covered in the data analysis course",
            },
        ],
    },
];
