import {
    Brain,
    Video,
    ImageIcon,
    FileText,
    PenToolIcon as Tool,
    CheckSquare,
    Folder,
    Clock,
    ArrowRight,
    MessageSquare,
    Palette,
    Film,
    Edit,
    Upload,
} from "lucide-react";

export default function AIVideo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800">
                        AI-Powered Social Media Video Creation
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Objective Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Brain className="w-8 h-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Objective
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <p className="mb-4 text-gray-700">
                            Students will learn to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Generate a compelling script using AI.",
                                "Create visuals with AI image generators.",
                                "Produce a video using AI video generators.",
                                "Edit the final video with a user-friendly video editor.",
                                "Optimize and export the video for social media platforms.",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                        <span className="text-indigo-600 text-sm font-medium">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Tools Overview Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Tool className="w-8 h-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Tools Overview
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Script Generation */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-indigo-600 px-4 py-3">
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-white mr-2" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Script Generation
                                    </h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            ChatGPT: Use OpenAI's ChatGPT to
                                            generate engaging scripts.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Creation */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-purple-600 px-4 py-3">
                                <div className="flex items-center">
                                    <ImageIcon className="w-5 h-5 text-white mr-2" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Image Creation
                                    </h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            Adobe Firefly: Generate high-quality
                                            images from text prompts.
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            GizAI
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            Remoun Passive
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            Lifewire
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Video Generation */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-pink-600 px-4 py-3">
                                <div className="flex items-center">
                                    <Video className="w-5 h-5 text-white mr-2" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Video Generation
                                    </h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            FlexClip: Create videos using AI
                                            with features like script-to-video
                                            and auto subtitles.
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            Kapwing: Convert text to video with
                                            AI-powered tools.
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            InVideo: Generate videos from simple
                                            text prompts with AI.
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            Fliki: Create videos with
                                            AI-generated voiceovers and avatars.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Video Editing */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-3">
                            <div className="bg-blue-600 px-4 py-3">
                                <div className="flex items-center">
                                    <Edit className="w-5 h-5 text-white mr-2" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Video Editing
                                    </h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                                        <span className="text-gray-700">
                                            CapCut Desktop: Edit videos with
                                            features like transitions, text
                                            overlays, and music.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Steps Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <CheckSquare className="w-8 h-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Project Steps
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                                        <span className="text-indigo-600 font-bold">
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            Script Writing
                                        </h3>
                                        <div className="flex items-center text-indigo-100 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>30 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-medium text-gray-700 mb-3">
                                    Task: Use ChatGPT to generate a 60-second
                                    script for a product, service, or social
                                    message.
                                </p>
                                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-indigo-800 mb-2">
                                        Guidelines:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Start with a hook to grab
                                                attention.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Present the main content or
                                                story.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                End with a clear call-to-action.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span className="font-medium">
                                        Resources:
                                    </span>{" "}
                                    LTX Video, WIRED
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                                        <span className="text-purple-600 font-bold">
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            Image Generation
                                        </h3>
                                        <div className="flex items-center text-purple-100 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>30 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-medium text-gray-700 mb-3">
                                    Task: Use Adobe Firefly to create 3-5 images
                                    that align with the script.
                                </p>
                                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-purple-800 mb-2">
                                        Tips:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Use descriptive prompts to get
                                                relevant images.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Ensure visual consistency in
                                                style and color palette.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span className="font-medium">
                                        Resources:
                                    </span>{" "}
                                    Fliki, Lifewire, Kapwing
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                                        <span className="text-pink-600 font-bold">
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            Video Creation with AI Tools
                                        </h3>
                                        <div className="flex items-center text-pink-100 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>45 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-medium text-gray-700 mb-3">
                                    Task: Choose one AI video generator
                                    (FlexClip, Kapwing, InVideo, or Fliki) to
                                    create a video using the script and images.
                                </p>
                                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-pink-800 mb-2">
                                        Instructions:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Input the script into the chosen
                                                tool.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Upload the generated images.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Customize the video with
                                                available features like
                                                voiceovers, music, and
                                                transitions.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span className="font-medium">
                                        Resources:
                                    </span>{" "}
                                    Hix Video, Kapwing, Buffer
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                                        <span className="text-blue-600 font-bold">
                                            4
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            Video Editing with CapCut Desktop
                                        </h3>
                                        <div className="flex items-center text-blue-100 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>45 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-medium text-gray-700 mb-3">
                                    Task: Import the AI-generated video into
                                    CapCut for final editing.
                                </p>
                                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-blue-800 mb-2">
                                        Editing Tips:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Add text overlays and subtitles.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Incorporate transitions between
                                                scenes.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Include background music or
                                                sound effects.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Adjust the aspect ratio for the
                                                intended social media platform
                                                (e.g., 9:16 for Instagram
                                                Reels).
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span className="font-medium">
                                        Resources:
                                    </span>{" "}
                                    Time, Tom's Guide, Kapwing
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                                        <span className="text-green-600 font-bold">
                                            5
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            Exporting and Sharing
                                        </h3>
                                        <div className="flex items-center text-green-100 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>30 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-medium text-gray-700 mb-3">
                                    Task: Export the final video and prepare it
                                    for sharing.
                                </p>
                                <div className="bg-green-50 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-green-800 mb-2">
                                        Guidelines:
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Ensure the video meets platform
                                                specifications.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Write an engaging caption and
                                                select appropriate hashtags.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                Optionally, share the video on a
                                                social media platform.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Assessment Criteria Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <CheckSquare className="w-8 h-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Assessment Criteria
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <MessageSquare className="w-5 h-5 text-indigo-600 mr-2" />
                                    <h3 className="font-semibold text-indigo-800">
                                        Script Quality (20%)
                                    </h3>
                                </div>
                                <p className="text-gray-700">
                                    Clarity, engagement, and relevance.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <Palette className="w-5 h-5 text-purple-600 mr-2" />
                                    <h3 className="font-semibold text-purple-800">
                                        Visuals (20%)
                                    </h3>
                                </div>
                                <p className="text-gray-700">
                                    Creativity and alignment with the script.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <Film className="w-5 h-5 text-pink-600 mr-2" />
                                    <h3 className="font-semibold text-pink-800">
                                        Video Cohesion (20%)
                                    </h3>
                                </div>
                                <p className="text-gray-700">
                                    Smooth integration of visuals and audio.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <Edit className="w-5 h-5 text-blue-600 mr-2" />
                                    <h3 className="font-semibold text-blue-800">
                                        Editing Skills (20%)
                                    </h3>
                                </div>
                                <p className="text-gray-700">
                                    Effective use of editing tools and
                                    techniques.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                                <div className="flex items-center mb-3">
                                    <Upload className="w-5 h-5 text-green-600 mr-2" />
                                    <h3 className="font-semibold text-green-800">
                                        Final Output (20%)
                                    </h3>
                                </div>
                                <p className="text-gray-700">
                                    Overall quality and readiness for social
                                    media.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deliverables Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Folder className="w-8 h-8 text-indigo-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Deliverables
                        </h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-indigo-600 text-sm font-medium">
                                        1
                                    </span>
                                </div>
                                <span className="text-gray-700">
                                    Final video file (MP4 format).
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-indigo-600 text-sm font-medium">
                                        2
                                    </span>
                                </div>
                                <span className="text-gray-700">
                                    Script document.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-indigo-600 text-sm font-medium">
                                        3
                                    </span>
                                </div>
                                <span className="text-gray-700">
                                    Generated images.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-indigo-600 text-sm font-medium">
                                        4
                                    </span>
                                </div>
                                <span className="text-gray-700">
                                    Brief reflection on the process and tools
                                    used.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-300">
                        AI-Powered Social Media Video Creation Project
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
