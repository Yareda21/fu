import { Bookmark, BookOpen, CheckCircle, Clock, Cog, FileText, Layers, Target, Users, Video } from "lucide-react"

export default function DmCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Digital Marketing Course
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Content Development with AI & Design Tools</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive course for digital marketing students to master content creation using modern AI and design
            tools.
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Audience:</span> Digital Marketing Students
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Format:</span> 3 In-depth Sessions (2 hours each)
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2 text-slate-700">
                <Target className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium">Outcome:</span> Students will create a complete social media video post
                  using AI and design tools, applying real-world content creation skills.
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Target className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-800">Learning Goals</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <p className="text-slate-600 mb-4">By the end of this course, students will:</p>
            <ul className="space-y-3">
              {[
                "Be proficient in Canva for designing visually appealing static content.",
                "Use AI tools (ChatGPT, Adobe Firefly, ElevenLabs) to generate scripts, images, and audio.",
                "Combine all assets into a cohesive, platform-ready social media video using CapCut or similar.",
                "Understand how to optimize content for different platforms (Instagram, TikTok, YouTube Shorts).",
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-800">Course Structure</h2>
          </div>

          {/* Session 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800">Graphic Design with Canva</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Objectives</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Understand how Canva works and explore its templates, assets, and branding tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Learn how to design engaging social media graphics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Practice customizing layouts, colors, and typography for brand identity.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Topics Covered</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Canva Dashboard and Interface Walkthrough</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Using Templates and Elements (Photos, Icons, Fonts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Branding Kits: Color palettes, fonts, and logos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Designing a 3-slide Instagram Carousel</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cog className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Tools & Resources</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Canva (Free or Pro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Pre-prepared brand kits and sample product data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Design brief handout (project scenario)</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Video className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Activities</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Introduction to Canva (15 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Hands-on: Design a Social Post (30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Design Principles Mini-Lecture (15 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Challenge Activity (30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Review and Wrap-up (30 minutes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bookmark className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Homework</h4>
                </div>
                <p className="text-slate-700 text-sm">
                  Design a Facebook Cover or LinkedIn Banner for a fictional brand.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Assessment</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Submission of Canva PNG file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Checklist: use of brand kit, clarity of message, layout balance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Session 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800">AI Generation of Videos, Images, and Audio</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Objectives</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Learn to write effective prompts for AI tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Use ChatGPT for storytelling and scripting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Generate images using Adobe Firefly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Produce realistic voiceovers using ElevenLabs.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Topics Covered</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Basics of Prompt Engineering (Structure, Parameters, Tone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Storytelling Techniques for Digital Marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Visual Consistency Across AI-generated Assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Audio Narration and Emotional Tone</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cog className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Tools & Resources</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>ChatGPT (web interface)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Adobe Firefly (or alternative like DALL·E or Midjourney)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>ElevenLabs for voice synthesis (or alternatives like PlayHT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Prompt-writing guide handout</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Video className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Activities</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Introduction to Prompt Engineering (20 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Scriptwriting with ChatGPT (20 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Visual Creation using Adobe Firefly (30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Voiceover with ElevenLabs (30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Showcase & Discussion (20 minutes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bookmark className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Homework</h4>
                </div>
                <p className="text-slate-700 text-sm">
                  Refine script and generate 1 alternate image and voiceover using improved prompts.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Assessment</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Review image quality (context relevance, creativity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Review audio clarity, voice fit, and emotional tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Rubric: Prompt quality, storytelling impact, asset cohesiveness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Session 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800">Project-Based Social Media Content Creation</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Objectives</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Combine AI-generated assets and Canva graphics into a short-form video.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Add motion, background audio, and subtitles using a video editor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Learn export settings for Instagram, TikTok, YouTube Shorts.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Topics Covered</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Storyboarding and Planning Visual Sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Using Video Editing Tools (CapCut / Premiere Rush / Canva Video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Sound Design and Subtitling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Export Formats and Platform Optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cog className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Tools & Resources</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>CapCut (or Canva's video editor, Premiere Rush)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>AI assets created in Session 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Sample background music library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Aspect ratio reference sheet</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Video className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Activities</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Video Editing Demo (15 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Storyboard Planning (20 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Hands-on Video Assembly (40 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Optimization & Export (20 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Final Showcase & Feedback (25 minutes)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bookmark className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Homework</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Publish the video to Instagram or TikTok (optional).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Prepare a caption and 3 hashtags.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Assessment</h4>
                </div>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Final video quality: Flow, design, storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Proper use of tools and assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 flex items-center justify-center">•</div>
                    <span>Creativity, audience impact, and technical execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-800">Optional Add-ons & Follow-Ups</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <ul className="space-y-3">
              {[
                'Run a mini-contest: "Best AI-Powered Campaign" with real brand themes',
                "Assign case studies: Analyze how top brands use AI in marketing (e.g., Coca-Cola's AI ad)",
                "Offer a bonus session on social media analytics or post-publishing strategies",
              ].map((addon, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold">
                    +
                  </div>
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
