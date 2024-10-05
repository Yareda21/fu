import { Code, Terminal, Database } from "lucide-react";

export const modules = [
    {
        name: "Front-End Development",
        icon: <Code className="w-6 h-6" />,
        resources: [
            {
                title: "HTML5 and CSS3 Fundamentals",
                type: "PDF",
                description: "Comprehensive guide to modern HTML and CSS",
            },
            {
                title: "JavaScript ES6+ Features",
                type: "Video",
                description: "Deep dive into ES6+ features and best practices",
            },
            {
                title: "React Hooks Workshop",
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
        name: "Database Management",
        icon: <Database className="w-6 h-6" />,
        resources: [
            {
                title: "SQL Mastery Course",
                type: "PDF",
                description: "Advanced SQL techniques for efficient querying",
            },
            {
                title: "MongoDB for Node.js Developers",
                type: "Video",
                description: "Integrating MongoDB with Node.js applications",
            },
            {
                title: "Database Design Patterns",
                type: "Code",
                description: "Implementing common database design patterns",
            },
        ],
    },
];
