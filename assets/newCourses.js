export const programmingCourses = [
  {
    title: "Python for Data Science",
    short: "Master data analysis and machine learning using Python",
    description:
      "Master data analysis and machine learning using Python, equipping yourself with in-demand skills for various industries.",
    image: "https://cdn.example.com/python-course.jpg", // Replace with your image URL
    // ... detailed information from the previous example
  },
  {
    title: "Full-Stack MERN",
    short: "Build dynamic and interactive web applications from scratch",
    description:
      "Build dynamic and interactive web applications from scratch using Java, Spring Boot, and modern web development practices.",
    image: "https://cdn.example.com/java-spring-course.jpg", // Replace with your image URL
    duration: {
      hours: 50,
      weeks: 10,
    },
    level: "Advanced",
    instructor: {
      name: "Ms. Jane Smith, Certified Spring Professional",
      expertise: "Java, Spring, Web development",
      institution: "Tech Academy",
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
    title: "Artificial Intelligence with Python",
    short: "Dive into the exciting world of AI and machine learning",
    description:
      "Dive into the exciting world of AI and machine learning, building intelligent systems using Python and popular libraries.",
    image: "https://cdn.example.com/ai-course.jpg", // Replace with your image URL
    // ... detailed information based on the Python course structure
  },

  {
    title: "Android App Development",
    short:
      "Create professional-quality Android apps from the ground up with React Native",
    description:
      "Create professional-quality Android apps from the ground up, mastering Kotlin, the modern language for Android development.",
    image: "https://cdn.example.com/android-course.jpg", // Replace with your image URL
    // ... detailed information based on the Java course structure, focusing on Android development and Kotlin
  },
  // Add more courses from other well-sought-after areas like cybersecurity, cloud computing, etc.
  // Web Development
  {
    title: "Front-End Web Development with React.js",
    short: "Master modern UI/UX practices, build single-page applications",
    description:
      "Master modern UI/UX practices, build single-page applications, and optimize web performance.",
    image: "https://cdn.example.com/react-next-course.jpg",
    // ... detailed information based on the existing structure
  },
  {
    title: "JavaScript for Web Developers",
    short: "Deep dive into core JavaScript projects",
    description:
      "Deep dive into core JavaScript principles, advanced concepts, and popular frameworks.",
    image: "https://cdn.example.com/javascript-course.jpg",
    // ... detailed information
  },
  {
    title: "Backend - Node.js and Express.js",
    short:
      "Back-end development with Node.js, build RESTful APIs, and databases",
    description:
      "Learn back-end development with Node.js, build RESTful APIs, and integrate databases.",
    image: "https://cdn.example.com/nodejs-express-course.jpg",
    // ... detailed information
  },

  // Artificial Intelligence & Machine Learning
  {
    title: "DL TensorFlow and PyTorch",
    short: "Build deep neural networks for image, text, and audio processing.",
    description:
      "Build deep neural networks for image, text, and audio processing.",
    image: "https://cdn.example.com/deep-learning-course.jpg",
    // ... detailed information
  },
];

export const additional = [
  {
    title: "Computer Vision",
    short:
      "Master image processing, object detection, and computer vision pipelines.",
    description:
      "Master image processing, object detection, and computer vision pipelines.",
    image: "https://cdn.example.com/computer-vision-course.jpg",
    // ... detailed information
  },

  // Data Science & Big Data
  {
    title: "DW and BI",
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

  // Cybersecurity
  {
    title: "Hacking",
    short: "Ethical Hacking and Penetration Testing",
    description:
      "Learn ethical hacking techniques and practice penetration testing.",
    image: "https://cdn.example.com/ethical-hacking-course.jpg",
    // ... detailed information
  },
  {
    title: "NSE",
    short: "Network Security Essentials",
    description:
      "Understand network security fundamentals and secure infrastructure.",
    image: "https://cdn.example.com/network-security-course.jpg",
    // ... detailed information
  },
  {
    title: "Cryptography",
    short:
      "Explore encryption, digital signatures, and secure coding practices",
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