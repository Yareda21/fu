import {
    PenTool,
    ImageIcon,
    Video,
    Film,
    Share2,
    CheckSquare,
    Folder,
    Clock,
    BookOpen,
    Wrench,
    ListChecks,
} from "lucide-react";

export default function AIVideoCreationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                        AI-Driven Animated Social Media Video Creation
                    </h1>
                    <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                </header>

                {/* Objective Section */}
                <section className="mb-12 bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <BookOpen className="text-purple-600 mr-2" size={24} />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Objective
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Students will learn to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>Develop a compelling script using AI.</span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>
                                Generate visuals with AI image generators.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>
                                Create animated videos using AI animation tools.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>
                                Edit and finalize videos with user-friendly
                                video editors.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>
                                Optimize and export videos for various social
                                media platforms.
                            </span>
                        </li>
                    </ul>
                </section>

                {/* Tools Overview */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Wrench className="text-purple-600 mr-2" size={24} />
                        <h2 className="text-2xl font-bold text-gray-800">
                            🛠️ Tools Overview
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Script Generation */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <PenTool
                                    className="text-purple-600 mr-2"
                                    size={20}
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Script Generation
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>ChatGPT:</strong> Utilize
                                        OpenAI's ChatGPT to craft engaging
                                        scripts.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Wikipedia</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Renderforest</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Image Creation */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <ImageIcon
                                    className="text-purple-600 mr-2"
                                    size={20}
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Image Creation
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Adobe Firefly:</strong> Generate
                                        high-quality images from text prompts.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Media.io</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>TechRadar</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Kapwing</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Animation Video Generation */}
                        <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                            <div className="flex items-center mb-4">
                                <Video
                                    className="text-purple-600 mr-2"
                                    size={20}
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Animation Video Generation
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Renderforest:</strong> Create
                                        animations from text descriptions.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>VideoPlus.ai:</strong> Generate
                                        animated videos without login or
                                        watermark.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>InVideo:</strong> Produce
                                        animated videos with voiceovers and
                                        subtitles.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Fliki:</strong> Create and
                                        customize unique animations.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>Animaker:</strong> Design
                                        animated videos using templates or from
                                        scratch.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Video Editing */}
                        <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
                            <div className="flex items-center mb-4">
                                <Film
                                    className="text-purple-600 mr-2"
                                    size={20}
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Video Editing
                                </h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <div className="text-purple-500 mr-2 mt-1">
                                        •
                                    </div>
                                    <span>
                                        <strong>CapCut Desktop:</strong> Edit
                                        videos with features like transitions,
                                        text overlays, and music.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Project Steps */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <ListChecks
                            className="text-purple-600 mr-2"
                            size={24}
                        />
                        <h2 className="text-2xl font-bold text-gray-800">
                            📚 Project Steps
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                    1
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <PenTool
                                            className="text-purple-600 mr-2"
                                            size={20}
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Script Writing
                                        </h3>
                                        <span className="ml-2 text-gray-500 flex items-center">
                                            <Clock size={16} className="mr-1" />{" "}
                                            30 minutes
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Task:</strong> Use ChatGPT to
                                        generate a 60-second script for a
                                        product, service, or social message.
                                    </p>
                                    <div className="mt-3">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Guidelines:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Start with a hook to grab
                                                    attention.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Present the main content or
                                                    story.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    End with a clear
                                                    call-to-action.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                    2
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <ImageIcon
                                            className="text-purple-600 mr-2"
                                            size={20}
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Image Generation
                                        </h3>
                                        <span className="ml-2 text-gray-500 flex items-center">
                                            <Clock size={16} className="mr-1" />{" "}
                                            30 minutes
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Task:</strong> Use Adobe Firefly
                                        to create 3-5 images that align with the
                                        script.
                                    </p>
                                    <div className="mt-3">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Tips:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Use descriptive prompts to
                                                    get relevant images.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Ensure visual consistency in
                                                    style and color palette.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                    3
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <Video
                                            className="text-purple-600 mr-2"
                                            size={20}
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Animation Video Creation
                                        </h3>
                                        <span className="ml-2 text-gray-500 flex items-center">
                                            <Clock size={16} className="mr-1" />{" "}
                                            45 minutes
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Task:</strong> Choose one AI
                                        animation tool (Renderforest,
                                        VideoPlus.ai, InVideo, Fliki, or
                                        Animaker) to create an animated video
                                        using the script and images.
                                    </p>
                                    <div className="mt-3">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Instructions:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Input the script into the
                                                    chosen tool.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Upload the generated images.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Customize the video with
                                                    available features like
                                                    voiceovers, music, and
                                                    transitions.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            VideoPlus
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            Galaxy.ai
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            CodeForGeek
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            Kapwing
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                    4
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <Film
                                            className="text-purple-600 mr-2"
                                            size={20}
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Video Editing with CapCut Desktop
                                        </h3>
                                        <span className="ml-2 text-gray-500 flex items-center">
                                            <Clock size={16} className="mr-1" />{" "}
                                            45 minutes
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Task:</strong> Import the
                                        AI-generated video into CapCut for final
                                        editing.
                                    </p>
                                    <div className="mt-3">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Editing Tips:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Add text overlays and
                                                    subtitles.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Incorporate transitions
                                                    between scenes.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Include background music or
                                                    sound effects.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Adjust the aspect ratio for
                                                    the intended social media
                                                    platform (e.g., 9:16 for
                                                    Instagram Reels).
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                    5
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <Share2
                                            className="text-purple-600 mr-2"
                                            size={20}
                                        />
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Exporting and Sharing
                                        </h3>
                                        <span className="ml-2 text-gray-500 flex items-center">
                                            <Clock size={16} className="mr-1" />{" "}
                                            30 minutes
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Task:</strong> Export the final
                                        video and prepare it for sharing.
                                    </p>
                                    <div className="mt-3">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Guidelines:
                                        </h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Ensure the video meets
                                                    platform specifications.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Write an engaging caption
                                                    and select appropriate
                                                    hashtags.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-purple-500 mr-2 mt-1">
                                                    •
                                                </div>
                                                <span>
                                                    Optionally, share the video
                                                    on a social media platform.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Assessment Criteria */}
                <section className="mb-12 bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <CheckSquare
                            className="text-purple-600 mr-2"
                            size={24}
                        />
                        <h2 className="text-2xl font-bold text-gray-800">
                            ✅ Assessment Criteria
                        </h2>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <div>
                                <span className="font-semibold">
                                    Script Quality (20%):
                                </span>{" "}
                                Clarity, engagement, and relevance.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <div>
                                <span className="font-semibold">
                                    Visuals (20%):
                                </span>{" "}
                                Creativity and alignment with the script.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <div>
                                <span className="font-semibold">
                                    Animation Cohesion (20%):
                                </span>{" "}
                                Smooth integration of visuals and audio.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <div>
                                <span className="font-semibold">
                                    Editing Skills (20%):
                                </span>{" "}
                                Effective use of editing tools and techniques.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <div>
                                <span className="font-semibold">
                                    Final Output (20%):
                                </span>{" "}
                                Overall quality and readiness for social media.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Deliverables */}
                <section className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <Folder className="text-purple-600 mr-2" size={24} />
                        <h2 className="text-2xl font-bold text-gray-800">
                            📁 Deliverables
                        </h2>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>Final video file (MP4 format).</span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>Script document.</span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>Generated images.</span>
                        </li>
                        <li className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <span>
                                Brief reflection on the process and tools used.
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
