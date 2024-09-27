export const programmingCourses = [
    {
        title: "Software Engineering",
        short: "Harvard-level training, starting with C programming, leading up to web development and AI. A comprehensive software engineering journey.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/SE_zxqozt.jpg",
        description:
            "This course offers an extensive introduction to computer science, beginning with C programming, followed by Python, front-end development, and web development. Projects include building a simple calculator, console applications, and creating interactive web interfaces. The course prepares students for careers as web developers, full-stack developers, and back-end developers, all while earning prestigious certificates from Harvard and Exceed.",
        duration: 6,
        level: "Beginner",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Introduction to CS and C",
                projects: [
                    "Simple Calculator",
                    "Object-oriented programming concepts",
                ],
            },
            {
                skill: "Introduction to Python Programming",
                projects: ["ATM Console App", "Ethio Telecom Service App"],
            },
            {
                skill: "Front-end development",
                projects: [
                    "Building interactive user interfaces",
                    "Portfolio Page on Github",
                ],
            },
        ],
        learningFormat: [
            "Video lectures, live coding, hands-on projects",
            "Personalized mentorship",
            "Access to practice platforms",
        ],
        careerPaths: [
            "Full-Stack Web Developer",
            "Python Flask Developer",
            "Back-End Developer",
            "Web Developer",
        ],
        certification: [
            {
                name: "Software Engineering certificate from Exceed",
                awardingBody: "Exceed Advanced Training and Consultancy",
                optional: true,
            },
            {
                name: "CS50 Introduction to Computer Science from Harvard",
                awardingBody: "Harvard University",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Basic Computer",
            webDev: "Familiarity with HTML, CSS, and JavaScript (optional)",
        },
        platform: "VS Code and Git",
        price: { individual: 399, corporate: 699 },
    },
    {
        title: "HTML and CSS",
        short: "Learn how to create engaging web pages with HTML's structure and CSS's styling power, mastering the basics of web design.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534998/fu%20project%20data/intro_to_web_dev_xgdzph.jpg",
        description:
            "This course introduces you to the fundamental building blocks of the web: HTML for structure and CSS for styling. Learn how to build static websites, edit and customize content, and manage digital assets. Perfect for beginners aiming to become front-end developers or content managers.",
        duration: 2,
        level: "Beginner",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Static Websites",
                projects: [
                    "Static Portfolio Project",
                    "Editing and Customizing Webpages",
                ],
            },
            {
                skill: "GitHub",
                projects: ["GitHub Portfolio", "Forking and Cloning Projects"],
            },
            {
                skill: "Content Management",
                projects: [
                    "Working as a content manager for organizations",
                    "Editing and manipulating content",
                ],
            },
        ],
        learningFormat: [
            "Video lectures, live coding, hands-on projects",
            "Personalized mentorship",
            "Access to practice platforms",
        ],
        careerPaths: [
            "Frontend Web Developer",
            "Full Stack Developer",
            "Content Manager",
        ],
        certification: [
            {
                name: "HTML and CSS certificate from Exceed",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic Computer" },
        platform: "VS Code and Git",
        price: { individual: 399, corporate: 699 },
    },
    {
        title: "JavaScript",
        short: "Build dynamic, interactive web applications with JavaScript, from basic syntax to advanced features and frameworks.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534998/fu%20project%20data/javascript_v37pnv.webp",
        description:
            "Explore core JavaScript principles and frameworks while creating dynamic, interactive web applications. Learn how to manipulate the DOM, handle events, and work with asynchronous programming, building robust applications from scratch.",
        duration: 4,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "JavaScript basics",
                projects: ["DOM manipulation", "Building dynamic web pages"],
            },
            {
                skill: "Advanced JavaScript",
                projects: ["Event handling", "Asynchronous programming"],
            },
            {
                skill: "Working with frameworks",
                projects: ["React basics", "Building SPA with JavaScript"],
            },
        ],
        learningFormat: [
            "Video lectures, coding sessions, projects",
            "Mentorship",
            "Access to an active practice community",
        ],
        careerPaths: [
            "Frontend Developer",
            "Full-Stack Developer",
            "JavaScript Developer",
        ],
        certification: [
            {
                name: "JavaScript Mastery",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic knowledge of HTML and CSS" },
        platform: "VS Code and Git",
        price: { individual: 399, corporate: 699 },
    },
    {
        title: "Front-End with React.js",
        short: "Learn to create responsive single-page applications using React.js, a powerful JavaScript library.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/reactjs_giqvlh.jpg",
        description:
            "Master React.js, a JavaScript library for building dynamic user interfaces. This course teaches you how to build single-page applications (SPAs) that are fast, responsive, and scalable, focusing on modern front-end web development practices.",
        duration: 3,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "React basics",
                projects: ["Building a SPA", "Managing component states"],
            },
            { skill: "Advanced React", projects: ["Hooks", "API integration"] },
            {
                skill: "Web Performance",
                projects: ["Optimizing web applications", "React and UX"],
            },
        ],
        learningFormat: [
            "Live coding sessions, video lectures",
            "Personalized mentorship",
            "Hands-on projects",
        ],
        careerPaths: [
            "React Developer",
            "Frontend Developer",
            "Full-Stack Developer",
        ],
        certification: [
            {
                name: "React.js Certified Professional",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic knowledge of JavaScript" },
        platform: "VS Code and Git",
        price: { individual: 399, corporate: 699 },
    },
    {
        title: "Backend - Node.js and Express.js",
        short: "Build server-side applications with Node.js and Express.js, mastering back-end web development.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/nod_exp_t1wshm.jpg",
        description:
            "Learn how to develop server-side applications using Node.js and Express.js, including building RESTful APIs and working with databases. This course is perfect for anyone looking to specialize in back-end development.",
        duration: 4,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Node.js fundamentals",
                projects: [
                    "Building APIs",
                    "Creating server-side applications",
                ],
            },
            {
                skill: "Express.js basics",
                projects: ["Building RESTful APIs", "Database integration"],
            },
        ],
        learningFormat: [
            "Video lectures, coding sessions",
            "Mentorship",
            "Projects",
        ],
        careerPaths: [
            "Backend Developer",
            "Full-Stack Developer",
            "Node.js Developer",
        ],
        certification: [
            {
                name: "Node.js Certified Professional",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic knowledge of JavaScript" },
        platform: "VS Code and Git",
        price: { individual: 399, corporate: 699 },
    },
    {
        title: "Full-Stack MERN",
        short: "Master the MERN stack: MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/mern_mhu34c.jpg",
        description:
            "Learn to build powerful full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). This course takes you from frontend development to server-side integration, enabling you to build complete web applications.",
        duration: { hours: 50, weeks: 10 },
        level: "Advanced",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "MongoDB for database management",
                projects: ["Setting up a database", "Managing data"],
            },
            {
                skill: "Express.js for server-side development",
                projects: ["Building APIs", "Routing"],
            },
            {
                skill: "React.js for frontend",
                projects: ["Building SPAs", "Component-based architecture"],
            },
            {
                skill: "Node.js for backend",
                projects: ["Server-side development", "Creating web servers"],
            },
        ],
        learningFormat: [
            "Live coding sessions, video lectures",
            "Personalized mentorship",
            "Hands-on projects",
        ],
        careerPaths: [
            "Full-Stack Developer",
            "MERN Stack Developer",
            "Web Developer",
        ],
        certification: [
            {
                name: "Full-Stack MERN Developer",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Basic knowledge of JavaScript, HTML, and CSS",
        },
        platform: "VS Code, MongoDB, Git",
        price: { individual: 499, corporate: 899 },
    },
    {
        title: "Next.js with Firebase",
        short: "Learn server-side rendering with Next.js and cloud database integration using Firebase for full-stack web applications.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1726761391/fu%20project%20data/featured_zrc9mk.png",
        description:
            "Master the powerful combination of Next.js for server-side rendering and Firebase for real-time database and authentication services. This course covers building scalable web apps with cloud integration.",
        duration: 4,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Next.js for server-side rendering",
                projects: [
                    "Building dynamic web apps",
                    "Routing and server-side logic",
                ],
            },
            {
                skill: "Firebase for cloud storage",
                projects: [
                    "Integrating real-time databases",
                    "Authentication and user management",
                ],
            },
        ],
        learningFormat: [
            "Live coding sessions, video lectures",
            "Personalized mentorship",
            "Hands-on projects",
        ],
        careerPaths: [
            "Full-Stack Developer",
            "Next.js Developer",
            "Firebase Developer",
        ],
        certification: [
            {
                name: "Next.js and Firebase Developer",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Basic knowledge of JavaScript, HTML, and CSS",
        },
        platform: "VS Code, Firebase, Git",
        price: { individual: 499, corporate: 899 },
    },
    {
        title: "Project Development with MERN",
        short: "Develop full-scale web applications using the MERN stack, focusing on hands-on project development.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1727378304/fu%20project%20data/hq720_hvqcvu.jpg",
        description:
            "This course emphasizes practical project development using MongoDB, Express.js, React.js, and Node.js (MERN). Build real-world applications from scratch while learning industry-standard practices.",
        duration: 6,
        level: "Advanced",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Full-stack MERN development",
                projects: [
                    "Building real-world applications",
                    "Handling databases, APIs, and front-end logic",
                ],
            },
            {
                skill: "Agile project management",
                projects: [
                    "Managing team-based projects",
                    "Version control and collaboration",
                ],
            },
        ],
        learningFormat: [
            "Live project-based sessions, video tutorials",
            "Teamwork and collaboration",
            "Mentorship",
        ],
        careerPaths: [
            "Full-Stack Developer",
            "Project Manager",
            "MERN Developer",
        ],
        certification: [
            {
                name: "MERN Project Development",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Strong knowledge of JavaScript, MERN basics",
        },
        platform: "VS Code, Git, MongoDB",
        price: { individual: 599, corporate: 999 },
    },
    {
        title: "Project Development with Next.js",
        short: "Create scalable web applications using Next.js, focusing on hands-on projects and real-world solutions.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1727378448/fu%20project%20data/xsnjinguz1uljfdxbtsi_bzto2t.jpg",
        description:
            "This course offers project-based learning with Next.js, helping you build scalable, high-performance web apps. Learn server-side rendering, API integration, and modern web development practices through real-world projects.",
        duration: 5,
        level: "Advanced",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Next.js advanced features",
                projects: ["Server-side rendering", "Static site generation"],
            },
            {
                skill: "API integration",
                projects: [
                    "Connecting to third-party services",
                    "Managing back-end logic",
                ],
            },
        ],
        learningFormat: [
            "Project-based sessions, video tutorials",
            "Mentorship and collaboration",
            "Access to coding tools",
        ],
        careerPaths: [
            "Next.js Developer",
            "Full-Stack Developer",
            "Project Manager",
        ],
        certification: [
            {
                name: "Next.js Project Development",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Strong knowledge of JavaScript and Next.js basics",
        },
        platform: "VS Code, Git, Firebase",
        price: { individual: 599, corporate: 999 },
    },
];

export const aiAndMachineLearning = [
    {
        title: "Artificial Intelligence for Career Development",
        short: "Unlock AI's potential in shaping your career and gain valuable skills for the future workforce.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1727379183/fu%20project%20data/1708034385295_izpyvh.png",
        description:
            "Learn how artificial intelligence can revolutionize your career. This course focuses on AI tools, trends, and strategies to enhance your employability and stay competitive in a rapidly evolving job market.",
        duration: 3,
        level: "Beginner",
        instructor: {
            name: "Yared Kebede, AI Expert",
            expertise: "Artificial Intelligence",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "AI applications in career growth",
                projects: [
                    "Building a personal AI assistant",
                    "Analyzing career data using AI",
                ],
            },
            {
                skill: "AI tools for professional development",
                projects: [
                    "Using AI for resume building",
                    "Job market predictions with AI",
                ],
            },
        ],
        learningFormat: [
            "Live workshops, hands-on practice",
            "Career-focused projects",
            "Mentorship and guidance",
        ],
        careerPaths: ["AI Strategist", "Career Consultant", "AI Developer"],
        certification: [
            {
                name: "AI for Career Development",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "No prior AI knowledge needed" },
        platform: "VS Code, AI tools, Git",
        price: { individual: 399, corporate: 799 },
    },
    {
        title: "Introduction to Computer Science and Programming using Python",
        short: "A foundational course in computer science principles using Python as the primary programming language.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/intro_cs_python_dvhytr.jpg",
        description:
            "Explore the fundamentals of computer science and programming using Python. This course is designed for beginners and covers essential concepts like data structures, algorithms, and problem-solving.",
        duration: 6,
        level: "Beginner",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Computer Science",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Python programming basics",
                projects: [
                    "Building simple applications",
                    "Solving algorithmic problems",
                ],
            },
            {
                skill: "Computer science fundamentals",
                projects: [
                    "Creating basic data structures",
                    "Algorithm development",
                ],
            },
        ],
        learningFormat: [
            "Video lectures, coding challenges",
            "Interactive labs",
            "Projects and mentorship",
        ],
        careerPaths: [
            "Software Developer",
            "Data Scientist",
            "Python Developer",
        ],
        certification: [
            {
                name: "Computer Science with Python",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "None, ideal for beginners" },
        platform: "VS Code, Python, Git",
        price: { individual: 499, corporate: 899 },
    },
    {
        title: "Java Programming",
        short: "Master the fundamentals of Java, one of the most popular programming languages in the world.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/java_programming_j3wdke.jpg",
        description:
            "Learn the essential features of Java, including object-oriented programming, data structures, and building applications. This course prepares you for enterprise-level Java development.",
        duration: 5,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Java Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Java programming",
                projects: [
                    "Building console-based applications",
                    "OOP and inheritance implementation",
                ],
            },
            {
                skill: "Data structures and algorithms",
                projects: [
                    "Implementing sorting algorithms",
                    "Building data-driven apps",
                ],
            },
        ],
        learningFormat: [
            "Hands-on coding, video tutorials",
            "Live project work",
            "Guidance and mentorship",
        ],
        careerPaths: [
            "Java Developer",
            "Software Engineer",
            "Enterprise Application Developer",
        ],
        certification: [
            {
                name: "Java Programming",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic knowledge of programming" },
        platform: "IntelliJ IDEA, Java, Git",
        price: { individual: 549, corporate: 949 },
    },
    {
        title: "Artificial Intelligence for Digital Marketing",
        short: "Leverage AI to revolutionize digital marketing strategies and boost business growth.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/ai_digital_marketing_sfsn1l.jpg",
        description:
            "This course introduces AI tools and techniques that are transforming digital marketing. Learn how to implement AI-driven strategies for SEO, customer targeting, content creation, and more.",
        duration: 4,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, AI & Marketing Expert",
            expertise: "Digital Marketing, AI",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "AI in digital marketing",
                projects: [
                    "Building AI-powered marketing campaigns",
                    "Personalizing customer experiences with AI",
                ],
            },
            {
                skill: "AI tools for content creation",
                projects: [
                    "Generating content using AI",
                    "SEO optimization with AI tools",
                ],
            },
        ],
        learningFormat: [
            "Video lectures, case studies",
            "Hands-on AI tool usage",
            "Mentorship and marketing projects",
        ],
        careerPaths: [
            "Digital Marketing Manager",
            "AI Marketing Strategist",
            "Content Creator",
        ],
        certification: [
            {
                name: "AI for Digital Marketing",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Basic understanding of marketing concepts",
        },
        platform: "Google Analytics, AI tools, Git",
        price: { individual: 599, corporate: 999 },
    },
    {
        title: "JavaScript for Web Developers",
        short: "Gain a strong understanding of JavaScript to enhance your web development skills.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/js_web_dev_kjsd9i.jpg",
        description:
            "This course covers JavaScript programming essentials, focusing on both front-end and back-end web development. Learn to build interactive web applications and integrate JavaScript into real-world projects.",
        duration: 5,
        level: "Intermediate",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "JavaScript fundamentals",
                projects: [
                    "Building interactive web pages",
                    "DOM manipulation and events",
                ],
            },
            {
                skill: "Advanced JavaScript concepts",
                projects: ["Working with APIs", "Asynchronous programming"],
            },
        ],
        learningFormat: [
            "Coding labs, video tutorials",
            "Interactive projects",
            "Mentorship and collaboration",
        ],
        careerPaths: [
            "Front-End Developer",
            "Full-Stack Developer",
            "JavaScript Engineer",
        ],
        certification: [
            {
                name: "JavaScript Web Development",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: { programming: "Basic knowledge of HTML, CSS" },
        platform: "VS Code, Git, Node.js",
        price: { individual: 549, corporate: 949 },
    },
    {
        title: "Automation using Artificial Intelligence",
        short: "Learn to use AI to automate tasks and optimize processes for maximum efficiency.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/ai_automation_s9ukgl.jpg",
        description:
            "This course teaches how to harness AI for automating repetitive tasks, streamlining workflows, and improving operational efficiency. Explore AI-driven automation tools across industries.",
        duration: 4,
        level: "Advanced",
        instructor: {
            name: "Yared Kebede, AI Engineer",
            expertise: "Automation and AI",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "AI-driven automation",
                projects: [
                    "Building automated workflows",
                    "AI for repetitive task optimization",
                ],
            },
            {
                skill: "Automation tools",
                projects: [
                    "Using AI tools for process automation",
                    "Creating smart bots and scripts",
                ],
            },
        ],
        learningFormat: [
            "Video tutorials, practical automation projects",
            "Industry case studies",
            "Mentorship and hands-on practice",
        ],
        careerPaths: [
            "AI Automation Engineer",
            "Process Optimization Expert",
            "DevOps Engineer",
        ],
        certification: [
            {
                name: "AI Automation",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Strong understanding of AI fundamentals",
        },
        platform: "VS Code, AI tools, Git",
        price: { individual: 599, corporate: 999 },
    },
];

export const dataAnalysis = [
    {
        title: "Python for Data Science",
        short: "Master data analysis and machine learning using Python",
        description:
            "Master data analysis and machine learning using Python, equipping yourself with in-demand skills for various industries.",
        image: "https://cdn.example.com/python-course.jpg", // Replace with your image URL
        // ... detailed information from the previous example
    },
    // Data Science & Big Data
    {
        title: "Microsoft PowerBI",
        short: "Data Warehousing and Business Intelligence",
        description:
            "Design data pipelines, build dashboards, and gain insights with BI tools.",
        image: "https://cdn.example.com/data-warehousing-course.jpg",
        // ... detailed information
    },
    {
        title: "DA - SQL and Python",
        short: "Data Analysis with SQL and Python",
        description:
            "Master data querying, manipulation, and analysis with SQL and Python.",
        image: "https://cdn.example.com/sql-python-course.jpg",
        // ... detailed information
    },
    {
        title: "Digital Marketing",
        short: "marketing efforts that utilize electronic devices and online platforms to connect with your target audience and achieve marketing objectives.",
    },
    {
        title: "Java",
        short: "IBM SPSS Statistics, is a powerful statistical software suite used for a wide range of data analysis tasks in various fields.",
    },
    {
        title: "Java",
        short: "IBM SPSS Statistics, is a powerful statistical software suite used for a wide range of data analysis tasks in various fields.",
    },
    {
        title: "Project Management Professional - PMP",
        short: "The Project Management Professional (PMP)® certification is a globally recognized credential that validates your ability to manage projects effectively. ",
    },
    {
        title: "Monitoring and Evaluation",
        short: "Monitoring and evaluation (M&E) are two vital processes used in various fields to assess progress, ensure accountability, and improve performance.",
    },
];

export const roadMap = [
    {
        link: "",
        title: "Fundamentals",
        description:
            "Essential courses that anyone pursuing Link career as Link professional software engineer should take. Data structures, algorithms, design patterns, and more!",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/fundamentals.svg",
    },
    {
        link: "",
        title: "Front-end Development",
        description:
            "All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg",
    },
    {
        link: "",
        title: "Back-end Development",
        description:
            "All the courses you need to build powerful APIs for web and mobile apps. Node, Django, MySQL, MongoDb and more!",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/back-end.svg",
    },
    {
        link: "",
        title: "Mobile Development",
        description:
            "All the courses you need to build professional, cross-platform mobile apps using React Native.",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg",
    },
    {
        link: "",
        title: "Digital Marketing and Automation",
        description:
            "All the courses you need to build professional, cross-platform mobile apps using React Native.",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg",
    },
    {
        link: "",
        title: "Game Development",
        description:
            "All the courses you need to build professional, cross-platform mobile apps using React Native.",
        image: "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg",
    },
];
