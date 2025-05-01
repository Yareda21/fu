import {
    Target,
    CheckCircle,
    Wrench,
    Layers,
    CheckSquare,
    Award,
    Lightbulb,
    MessageSquare,
    Palette,
    Video,
    Edit,
    FileVideo,
    BarChart,
    FileText,
    Play,
} from "lucide-react";

export default function DMsocail() {
    // Learning Objectives
    const objectives = [
        "Understand the workflow of creating short-form content using multiple AI tools.",
        "Generate visuals and animations using AI tools (Firefly + Genmo AI or Hailuo).",
        "Edit and enhance the final product with transitions, music, and text in CapCut Desktop.",
        "Export the video for a specific platform (TikTok, Instagram Reels, or YouTube Shorts).",
    ];

    // Tools Required
    const tools = [
        {
            name: "ChatGPT",
            purpose: "Script/story generation",
            icon: <MessageSquare size={24} className="text-green-500" />,
        },
        {
            name: "Adobe Firefly",
            purpose: "Image generation (scene visuals, objects)",
            icon: <Palette size={24} className="text-blue-500" />,
        },
        {
            name: "Genmo AI / Hailuo AI",
            purpose: "AI-powered video animation or concept video",
            icon: <Video size={24} className="text-purple-500" />,
        },
        {
            name: "CapCut Desktop",
            purpose: "Final editing, subtitles, music, export",
            icon: <Edit size={24} className="text-red-500" />,
        },
    ];

    // Project Steps
    const steps = [
        {
            title: "Script Creation (ChatGPT)",
            duration: "15–20 minutes",
            icon: <MessageSquare size={24} className="text-green-500" />,
            description:
                "Students will generate a short 30–60 second script for a product explainer, social awareness message, or storytelling video.",
            tips: [
                "Keep script under 100 words",
                "Use engaging hook + body + call to action structure",
                "Tailor tone: emotional, fun, or educational",
            ],
        },
        {
            title: "Image Generation (Adobe Firefly)",
            duration: "20–30 minutes",
            icon: <Palette size={24} className="text-blue-500" />,
            description:
                "Students generate 3–5 high-quality images to match their script. Each image will represent a key moment in the video.",
            tips: [
                'Use specific language (e.g., "3D illustration of a teen using a VR headset in a colorful room")',
                "Match lighting and color palette across all images",
                "Export Settings: Download in high resolution (JPG or PNG)",
            ],
        },
        {
            title: "AI Video Animation (Genmo AI or Hailuo AI)",
            duration: "30–40 minutes",
            icon: <Video size={24} className="text-purple-500" />,
            description:
                "Use the script or generated images to create an AI-powered video.",
            tips: [
                "In Genmo AI: Students can input their script and attach visuals, or use Genmo to animate scenes",
                "In Hailuo AI: Students can upload images, then generate smooth transitions or stylized video sequences",
                "Pro Tip: Keep duration short (15–30 seconds) per clip to maintain attention",
            ],
        },
        {
            title: "Video Editing (CapCut Desktop)",
            duration: "40–60 minutes",
            icon: <Edit size={24} className="text-red-500" />,
            description:
                "Final editing of the AI-generated content with CapCut.",
            tips: [
                "Import AI-generated video or image sequence",
                "Add voiceover or music",
                "Insert subtitles, text overlays, and transitions",
                "Use platform-specific formats (e.g., 9:16 for TikTok)",
            ],
            checklist: [
                'Add animated CTA (e.g., "Follow for more")',
                "Include brand logo or watermark",
                "Apply color correction if needed",
            ],
        },
    ];

    // Submission Requirements
    const requirements = [
        {
            text: "A complete social media-ready video (30–90 seconds)",
            icon: <Video size={20} className="text-purple-600" />,
        },
        {
            text: "Includes AI visuals + storytelling + editing polish",
            icon: <FileVideo size={20} className="text-purple-600" />,
        },
        {
            text: "Optimized for vertical viewing (9:16 aspect ratio)",
            icon: <FileVideo size={20} className="text-purple-600" />,
        },
        {
            text: "Delivered in MP4 format",
            icon: <FileVideo size={20} className="text-purple-600" />,
        },
    ];

    // Assessment Criteria
    const criteria = [
        { name: "Script clarity and creativity", points: 5 },
        { name: "Visual quality and consistency", points: 5 },
        { name: "Video structure & flow", points: 5 },
        { name: "Editing (music, subtitles, CTA)", points: 5 },
    ];

    // Optional Extensions
    const extensions = [
        {
            title: "Use CapCut templates for faster delivery",
            icon: <FileText size={20} className="text-yellow-500" />,
            description:
                "Leverage pre-made templates to speed up the editing process.",
        },
        {
            title: "Run a social media A/B test",
            icon: <BarChart size={20} className="text-blue-500" />,
            description:
                "Upload different video styles and track engagement to determine which performs better.",
        },
        {
            title: "Create a campaign kit",
            icon: <Lightbulb size={20} className="text-green-500" />,
            description:
                "Develop a complete package with thumbnail, caption, and hashtags for social media posting.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 py-16 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-5">
                                Educational Project
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                AI Storytelling for Social Media
                            </h1>
                            <p className="text-xl md:text-2xl mb-6 text-purple-100">
                                Project Lesson Plan: 1–2 Class Sessions (2 hours
                                each)
                            </p>
                            <div className="flex items-center gap-2 text-purple-200 mb-4">
                                <Target size={20} />
                                <p>
                                    Create engaging social media videos using AI
                                    tools
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="aspect-[9/16] bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-2xl overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                            <Play
                                                size={32}
                                                className="text-white ml-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                                    <p className="text-purple-700 font-bold">
                                        Duration: 2 Sessions
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        2 hours each
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Learning Objectives */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Target size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Learning Objectives
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8">
                        By the end of this project, students will:
                    </p>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <ul className="space-y-4">
                            {objectives.map((objective, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle
                                        size={22}
                                        className="text-green-500 mt-0.5 flex-shrink-0"
                                    />
                                    <p className="text-gray-700">{objective}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Tools Required */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Tools Required
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tool
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Purpose
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tools.map((tool, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
                                                        {tool.icon}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {tool.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {tool.purpose}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Project Breakdown */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Layers size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Project Breakdown
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {step.title}
                                            </h3>
                                            <p className="text-purple-600">
                                                Duration: {step.duration}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4">
                                        {step.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-700 mb-2">
                                            Tips:
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            {step.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex}>{tip}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {step.checklist && (
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">
                                                Checklist:
                                            </h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                                {step.checklist.map(
                                                    (item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Submission Requirements */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckSquare size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Final Submission Requirements
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <ul className="space-y-4">
                            {requirements.map((req, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    {req.icon}
                                    <span className="text-gray-700">
                                        {req.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Assessment Rubric */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Award size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Assessment Rubric
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-6">Total: 20 Points</p>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Criteria
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {criteria.map((criterion, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {criterion.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                {criterion.points} points
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Optional Extensions */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Lightbulb size={28} className="text-purple-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Optional Extensions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {extensions.map((extension, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {extension.icon}
                                    <h3 className="font-semibold text-gray-800">
                                        {extension.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {extension.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
