export const programmingCourses = [
    {
        title: "Software Engineering",
        short: "You want to get Harvard University Certificate! Starting from C Programing language up to web development and AI is included!",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/SE_zxqozt.jpg",
        description: "",
        duration: 6,
        level: "Begineer",
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
            "Blended learning: video lectures, live coding sessions, hands-on projects",
            "Personalized mentorship from experienced instructors",
            "Access to an active online practice platforms",
        ],
        careerPaths: [
            "JS Full-Stack Web Developer",
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
        platform: "VS Code and Git", // Link to course platform
        price: {
            individual: 399, // Individual enrollment price
            corporate: 699, // Corporate training price
        },
    },
    {
        title: "HTML and CSS",
        short: "HTML and CSS bring web pages to life. HTML provides the foundation, and CSS adds the style and presentation.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534998/fu%20project%20data/intro_to_web_dev_xgdzph.jpg",
        description: "",
        duration: 2,
        level: "Begineer",
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
                skill: "Github",
                projects: ["Github Portfolio", "Forking and Cloning Projects "],
            },
            {
                skill: "Content Mangement",
                projects: [
                    "How to work as a content manager for organizations",
                    "Editing and manuplating content on webpages",
                ],
            },
        ],
        learningFormat: [
            "Blended learning: video lectures, live coding sessions, hands-on projects",
            "Personalized mentorship from experienced instructors",
            "Access to an active online practice platforms",
        ],
        careerPaths: [
            "Frontend Web Developer",
            "Full Stack Web Developer",
            "Content Manager",
        ],
        certification: [
            {
                name: "Static Webpage Development using HTML and CSS certificate from Exceed",
                awardingBody: "Exceed Advanced Training Center",
                optional: true,
            },
        ],
        prerequisites: {
            programming: "Basic Computer",
        },
        platform: "VS Code and Git", // Link to course platform
        price: {
            individual: 399, // Individual enrollment price
            corporate: 699, // Corporate training price
        },
    },
    {
        title: "JavaScript",
        short: " delves into the world of utilizing JavaScript to craft interactive and dynamic web applications. ",
        description:
            "Deep dive into core JavaScript principles, advanced concepts, and popular frameworks.  delves into the world of utilizing JavaScript to craft interactive and dynamic web applications. It's a vast domain encompassing both fundamental building blocks and advanced techniques, empowering you to breathe life into web pages.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534998/fu%20project%20data/javascript_v37pnv.webp",
        // ... detailed information
    },

    {
        title: "Front-End with React.js",
        short: "Master modern UI/UX practices, build single-page applications",
        description:
            "Master modern UI/UX practices, build single-page applications, and optimize web performance.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/reactjs_giqvlh.jpg",
        // ... detailed information based on the existing structure
    },
    {
        title: "Backend - Node.js and Express.js",
        short: "Back-end development with Node.js, build RESTful APIs, and databases",
        description:
            "Learn back-end development with Node.js, build RESTful APIs, and integrate databases.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/nod_exp_t1wshm.jpg",
        // ... detailed information
    },

    {
        title: "Full-Stack MERN",
        short: "MongoDB, Express.js, React.js, and Node.js, is a popular full-stack web development framework used to build modern and interactive web applications.",
        description:
            "Build dynamic and interactive web applications from scratch using Java, Spring Boot, and modern web development practices.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723534999/fu%20project%20data/mern_mhu34c.jpg", // Replace with your image URL
        duration: {
            hours: 50,
            weeks: 10,
        },
        level: "Advanced",
        instructor: {
            name: "Yared Kebede, Software Engineer",
            expertise: "Web Development",
            institution: "Exceed",
        },
        skillsLearned: [
            {
                skill: "Java programming fundamentals",
                projects: [
                    "Building command-line applications",
                    "Object-oriented programming concepts",
                ],
            },
            {
                skill: "Spring Boot development",
                projects: [
                    "Creating RESTful APIs",
                    "Data access with Spring Data JPA",
                    "Security and authentication",
                ],
            },
            {
                skill: "Front-end development with React.js",
                projects: [
                    "Building interactive user interfaces",
                    "Integrating React with Spring Boot",
                ],
            },
        ],
        learningFormat: [
            "Blended learning: video lectures, live coding sessions, hands-on projects",
            "Personalized mentorship from experienced instructors",
            "Access to an active online community forum",
        ],
        careerPaths: [
            "Full-Stack Java Developer",
            "Spring Boot Developer",
            "Back-End Developer",
            "Web Developer",
        ],
        certification: {
            name: "Java Spring Certified Professional",
            awardingBody: "Oracle",
            optional: true,
        },
        prerequisites: {
            programming: "Basic understanding of Java programming",
            webDev: "Familiarity with HTML, CSS, and JavaScript (optional)",
        },
        resources: {
            books: ["Spring in Action", "Head First Java"],
            articles: [
                "Building Microservices with Spring Boot",
                "React for Beginners",
            ],
            blogs: ["Java Code Geeks", "InfoQ"],
        },
        platform: "https://www.example-learning-platform.com", // Link to course platform
        price: {
            individual: 399, // Individual enrollment price
            corporate: 699, // Corporate training price
        },
    },
    {
        title: "Android App Development",
        short: "Create professional-quality Android apps from the ground up with React Native",
        description:
            "Create professional-quality Android apps from the ground up, mastering Kotlin, the modern language for Android development.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1723535546/fu%20project%20data/Flutter-vs-react-native_og7rna.webp", // Replace with your image URL
        // ... detailed information based on the Java course structure, focusing on Android development and Kotlin
    },

    {
        title: "Next JS with Firebase",
        short: "Network Security Essentials",
        description:
            "Understand network security fundamentals and secure infrastructure.",
        image: "https://res.cloudinary.com/dlomcic7f/image/upload/v1726761391/fu%20project%20data/featured_zrc9mk.png",
        // ... detailed information
    },
];

export const aiAndMachineLearning = [
    {
        title: "DL TensorFlow and PyTorch",
        short: "Build deep neural networks for image, text, and audio processing.",
        description:
            "Build deep neural networks for image, text, and audio processing.",
        image: "https://cdn.example.com/deep-learning-course.jpg",
        // ... detailed information
    },

    {
        title: "Artificial Intelligence with Python",
        short: "Dive into the exciting world of AI and machine learning",
        description:
            "Dive into the exciting world of AI and machine learning, building intelligent systems using Python and popular libraries.",
        image: "https://cdn.example.com/ai-course.jpg", // Replace with your image URL
        // ... detailed information based on the Python course structure
    },
    {
        title: "Computer Vision",
        short: "Master image processing, object detection, and computer vision pipelines.",
        description:
            "Master image processing, object detection, and computer vision pipelines.",
        image: "https://cdn.example.com/computer-vision-course.jpg",
        // ... detailed information
    },

    // Cybersecurity

    {
        title: "Cryptography",
        short: "Explore encryption, digital signatures, and secure coding practices",
        description:
            "Explore encryption, digital signatures, and secure coding practices.",
        image: "https://cdn.example.com/cryptography-course.jpg",
        // ... detailed information
    },

    // Cloud Computing
    {
        title: "AWS Certified Solutions Architect Associate",
        description:
            "Prepare for the AWS certification and learn cloud architecture.",
        image: "https://cdn.example.com/aws-course.jpg",
        // ... detailed information
    },
    {
        title: "Microsoft Azure Fundamentals",
        description: "Get started with Azure cloud platform and core services.",
        image: "https://cdn.example.com/azure-course.jpg",
        // ... detailed information
    },
    {
        title: "Google Cloud Platform Essentials",
        description:
            "Explore GCP services and learn cloud deployment and management.",
        image: "https://cdn.example.com/g",
    },
    {
        title: "NLP with Python",
        short: "Explore text analysis, sentiment analysis, chatbots, and more.",
        description:
            "Explore text analysis, sentiment analysis, chatbots, and more.",
        image: "https://cdn.example.com/nlp-course.jpg",
        // ... detailed information
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
