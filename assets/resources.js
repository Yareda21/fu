import { Code, Terminal, BadgeDollarSign, Database } from "lucide-react";

export const modules = [
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
                title: "JavaScript ES6+ Features",
                type: "Video",
                description: "Deep dive into ES6+ features and best practices",
            },
            {
                title: "React - Component Based Architecture",
                type: "Code",
                description: "Hands-on workshop for mastering React Hooks",
            },
        ],
    },
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

    {
        name: "Data Analysis and Visualization",
        icon: <Database className="w-6 h-6" />,
        resources: [
            {
                title: "MySQL Course Outline",
                type: "PDF",
                description: "Overview of topics covered in the MySQL course",
            },
            {
                title: "MySQL Notes",
                type: "PDF",
                description: "Detailed notes on MySQL concepts and commands",
            },
            {
                title: "MySQL Commands Short Notes",
                type: "PDF",
                description: "Quick reference for commonly used MySQL commands",
            },
            {
                title: "MySQL Sample Codes",
                type: "PDF",
                description:
                    "Examples of MySQL queries and database operations",
            },
            {
                title: "Basic Python Course Outline",
                type: "PDF",
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
                description:
                    "Examples of Python code for various programming tasks",
            },
        ],
    },

    {
        name: "Digital Marketing",
        icon: <BadgeDollarSign className="w-6 h-6" />,
        resources: [
            {
                title: "Digital Marketing Course Outline",
                type: "PDF",
                url: "https://www.mediafire.com/file/7p446jkqfh350jo/DM_course_Outline.pdf/file",
                description: "Advanced SQL techniques for efficient querying",
            },
            {
                title: "Digital Marketing Notes",
                type: "PDF",
                url: "https://www.mediafire.com/file/hugxm1id3c8iw1x/Module_Doc.pdf/file",
                description: "Integrating MongoDB with Node.js applications",
            },
            {
                title: "Content Marketing Docs",
                type: "PDF",
                url: "",
                description: "Implementing common database design patterns",
            },
            {
                title: "MySQL Sample Codes",
                type: "PDF",
                url: "",
                description: "Implementing common database design patterns",
            },
            {
                title: "Basic Python Course Outline",
                type: "PDF",
                url: "",
                description: "Advanced SQL techniques for efficient querying",
            },
            {
                title: "Python Notes",
                type: "PDF",
                url: "",
                description: "Integrating MongoDB with Node.js applications",
            },
            {
                title: "Python Commands Short Notes",
                type: "PDF",
                description: "Implementing common database design patterns",
            },
            {
                title: "Python Sample Codes",
                type: "URL",
                description: "Implementing common database design patterns",
            },
        ],
    },
];
