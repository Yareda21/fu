import {
    Video,
    Sparkles,
    Share2,
    TrendingUp,
    Mic,
    Layers
} from "lucide-react";

export const exercises = [
    {
        id: 1,
        title: "Content Development with AI & Design Tools",
        description:
            "A comprehensive course for digital marketing students to master content creation using modern AI and design tools.",
        difficulty: "Beginner",
        duration: "45 minutes",
        bgColor: "bg-blue-100",
        icon: <Sparkles className="h-24 w-24 text-blue-500" />,
        objectives: [
            "Understand how AI can assist in content creation",
            "Learn to craft effective prompts for AI script generation",
            "Create a complete video script using AI tools",
        ],
        instructions: [
            "Sign up for an AI writing assistant like ChatGPT or Claude",
            "Identify your target audience and video goals",
            "Create a detailed prompt including tone, length, and key points",
            "Generate and refine your script with the AI tool",
            "Format the script for video production",
        ],
        resources: [
            {
                title: "Effective Prompting Guide",
                url: "https://example.com/prompting",
            },
            {
                title: "Video Script Templates",
                url: "https://example.com/templates",
            },
            {
                title: "ChatGPT Tutorial",
                url: "https://example.com/chatgpt",
            },
        ],
    },
    {
        id: 2,
        title: "AI-Generated B-Roll Creation",
        description:
            "Discover how to use AI image generation tools to create custom B-roll for your videos.",
        difficulty: "Intermediate",
        duration: "60 minutes",
        bgColor: "bg-purple-100",
        icon: <Video className="h-24 w-24 text-purple-500" />,
        objectives: [
            "Learn about AI image and video generation capabilities",
            "Create custom B-roll that matches your brand aesthetic",
            "Integrate AI-generated content with traditional video",
        ],
        instructions: [
            "Set up an account with an AI image generation tool like Midjourney or DALL-E",
            "Create a shot list based on your video script",
            "Generate images using detailed prompts that match your needs",
            "Edit and refine the generated images",
            "Incorporate the images into your video editing software",
        ],
        resources: [
            {
                title: "Midjourney Prompt Guide",
                url: "https://example.com/midjourney",
            },
            {
                title: "B-Roll Integration Techniques",
                url: "https://example.com/b-roll",
            },
            {
                title: "Video Composition Basics",
                url: "https://example.com/composition",
            },
        ],
    },
    {
        id: 3,
        title: "AI Voice-Over Creation",
        description:
            "Master the art of creating natural-sounding voice-overs using AI text-to-speech technology.",
        difficulty: "Beginner",
        duration: "30 minutes",
        bgColor: "bg-green-100",
        icon: <Mic className="h-24 w-24 text-green-500" />,
        objectives: [
            "Understand the capabilities of modern AI voice synthesis",
            "Learn to edit scripts for natural-sounding voice-overs",
            "Create professional voice-overs without recording equipment",
        ],
        instructions: [
            "Choose an AI voice platform like ElevenLabs or Play.ht",
            "Select a voice that matches your brand personality",
            "Format your script with proper punctuation for natural pauses",
            "Generate the voice-over and download the audio file",
            "Edit the audio if needed and incorporate into your video",
        ],
        resources: [
            {
                title: "Voice-Over Script Writing Guide",
                url: "https://example.com/vo-scripts",
            },
            {
                title: "ElevenLabs Tutorial",
                url: "https://example.com/elevenlabs",
            },
            {
                title: "Audio Editing Basics",
                url: "https://example.com/audio-editing",
            },
        ],
    },
    {
        id: 4,
        title: "AI-Enhanced Video Editing",
        description:
            "Explore how AI tools can streamline your video editing workflow and enhance production quality.",
        difficulty: "Advanced",
        duration: "90 minutes",
        bgColor: "bg-amber-100",
        icon: <Layers className="h-24 w-24 text-amber-500" />,
        objectives: [
            "Discover AI-powered video editing tools and their capabilities",
            "Learn to use AI for color grading, transitions, and effects",
            "Automate repetitive editing tasks with AI assistance",
        ],
        instructions: [
            "Set up an AI-enhanced video editing tool like Runway ML or Descript",
            "Import your raw footage and script",
            "Use AI tools to automatically generate a rough cut",
            "Apply AI-powered color grading and visual effects",
            "Refine the edit and export your final video",
        ],
        resources: [
            {
                title: "Runway ML Tutorial",
                url: "https://example.com/runway",
            },
            {
                title: "AI Editing Workflow Guide",
                url: "https://example.com/ai-editing",
            },
            {
                title: "Advanced Video Effects with AI",
                url: "https://example.com/ai-effects",
            },
        ],
    },
    {
        id: 5,
        title: "AI-Driven Content Strategy",
        description:
            "Learn how to use AI to analyze trends and develop a data-driven content strategy for your videos.",
        difficulty: "Intermediate",
        duration: "75 minutes",
        bgColor: "bg-pink-100",
        icon: <TrendingUp className="h-24 w-24 text-pink-500" />,
        objectives: [
            "Understand how AI can identify content trends and opportunities",
            "Learn to use AI for competitor analysis and audience insights",
            "Develop a content calendar based on AI recommendations",
        ],
        instructions: [
            "Set up tools like BuzzSumo or SparkToro for content analysis",
            "Use ChatGPT to analyze recent trends in your industry",
            "Generate content ideas based on AI insights",
            "Create a content calendar with prioritized video topics",
            "Develop a distribution strategy based on platform analytics",
        ],
        resources: [
            {
                title: "Content Strategy Framework",
                url: "https://example.com/strategy",
            },
            {
                title: "AI Trend Analysis Guide",
                url: "https://example.com/trends",
            },
            {
                title: "Social Media Algorithm Insights",
                url: "https://example.com/algorithms",
            },
        ],
    },
    {
        id: 6,
        title: "AI Social Media Distribution",
        description:
            "Master using AI tools to optimize your video distribution across social media platforms.",
        difficulty: "Beginner",
        duration: "45 minutes",
        bgColor: "bg-teal-100",
        icon: <Share2 className="h-24 w-24 text-teal-500" />,
        objectives: [
            "Learn how AI can optimize posting schedules and content formats",
            "Understand platform-specific AI optimization techniques",
            "Create an automated distribution workflow with AI assistance",
        ],
        instructions: [
            "Set up an AI social media management tool like Buffer or Hootsuite",
            "Use AI to analyze your best performing content",
            "Generate platform-specific captions and hashtags with AI",
            "Create a posting schedule based on AI recommendations",
            "Set up automated performance tracking and reporting",
        ],
        resources: [
            {
                title: "Platform-Specific Video Requirements",
                url: "https://example.com/requirements",
            },
            {
                title: "AI Caption Writing Guide",
                url: "https://example.com/captions",
            },
            {
                title: "Social Media Analytics Basics",
                url: "https://example.com/analytics",
            },
        ],
    },
];
