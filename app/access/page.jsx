"use client";

import { useEffect, useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Download,
    User,
    BookOpen,
    Clock,
    Award,
    Calendar,
    BarChart2,
    MessageSquare,
    Bookmark,
    CheckCircle2,
} from "lucide-react";
import { modules } from "../../assets/resources.js";

export default function StudentDashboard() {
    const [openModule, setOpenModule] = useState(null);
    const [completedResources, setCompletedResources] = useState(new Set());
    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const userParam = searchParams.get("user");
        if (userParam) {
            setUser(JSON.parse(userParam));
        }
    }, []);

    const handleModuleClick = (moduleName) => {
        setOpenModule(openModule === moduleName ? null : moduleName);
    };

    const handleResourceComplete = (resourceTitle) => {
        setCompletedResources((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(resourceTitle)) {
                newSet.delete(resourceTitle);
            } else {
                newSet.add(resourceTitle);
            }
            return newSet;
        });
    };

    const totalResources = modules.reduce(
        (acc, module) => acc + module.resources.length,
        0
    );
    const progressPercentage = (completedResources.size / totalResources) * 100;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Top Navigation Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                Student Portal
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-gray-900">
                                <MessageSquare className="h-6 w-6" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <User className="h-6 w-6 text-gray-600" />
                                <span className="text-gray-900 font-medium">
                                    {user.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Dashboard Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex items-center">
                                <BookOpen className="h-8 w-8 text-blue-600" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-600">
                                        Current Course
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Full-Stack Development
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                            <div className="flex items-center">
                                <Clock className="h-8 w-8 text-green-600" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-600">
                                        Time Spent
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        24 Hours
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                            <div className="flex items-center">
                                <Award className="h-8 w-8 text-purple-600" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-600">
                                        Achievements
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        5 Badges
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4">
                            <div className="flex items-center">
                                <Calendar className="h-8 w-8 text-yellow-600" />
                                <div className="ml-4">
                                    <p className="text-sm text-gray-600">
                                        Next Session
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Tomorrow, 10:00 AM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveTab("overview")}
                                    className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                        activeTab === "overview"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    <BarChart2 className="h-5 w-5" />
                                    <span>Overview</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("resources")}
                                    className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                        activeTab === "resources"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    <Bookmark className="h-5 w-5" />
                                    <span>Resources</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("progress")}
                                    className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                        activeTab === "progress"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span>Progress</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {activeTab === "overview" && (
                            <div className="space-y-6">
                                {/* Progress Overview */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-semibold mb-4">
                                        Course Progress
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">
                                                Overall Progress
                                            </span>
                                            <span className="text-gray-900 font-medium">
                                                {Math.round(progressPercentage)}
                                                %
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{
                                                    width: `${progressPercentage}%`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-600">
                                                    Completed
                                                </p>
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    {completedResources.size}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm text-gray-600">
                                                    Remaining
                                                </p>
                                                <p className="text-2xl font-semibold text-gray-900">
                                                    {totalResources -
                                                        completedResources.size}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-semibold mb-4">
                                        Recent Activity
                                    </h2>
                                    <div className="space-y-4">
                                        {modules
                                            .slice(0, 3)
                                            .map((module, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                                                >
                                                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        {module.icon}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {module.name}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Last accessed: 2
                                                            hours ago
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "resources" && (
                            <div className="space-y-6">
                                {modules.map((module) => (
                                    <div
                                        key={module.name}
                                        className=" bg-slate-300 text-gray-900 rounded-lg shadow-sm overflow-hidden"
                                    >
                                        <button
                                            className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-gray-500"
                                            onClick={() =>
                                                handleModuleClick(module.name)
                                            }
                                        >
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    {module.icon}
                                                </div>
                                                <span className="ml-3">
                                                    {module.name}
                                                </span>
                                            </div>
                                            {openModule === module.name ? (
                                                <ChevronUp />
                                            ) : (
                                                <ChevronDown />
                                            )}
                                        </button>
                                        {openModule === module.name && (
                                            <div className="p-4 border-t">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {module.resources.map(
                                                        (resource, index) => (
                                                            <div
                                                                key={index}
                                                                className="bg-gray-50 rounded-lg p-4"
                                                            >
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <h3 className="font-medium text-gray-900">
                                                                        {
                                                                            resource.title
                                                                        }
                                                                    </h3>
                                                                    <span className="text-sm text-gray-900">
                                                                        {
                                                                            resource.type
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <p className="text-sm text-gray-600 mb-3">
                                                                    {
                                                                        resource.description
                                                                    }
                                                                </p>
                                                                <div className="flex justify-between items-center">
                                                                    <a
                                                                        href={
                                                                            resource.url
                                                                        }
                                                                        target="_blank"
                                                                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                                                    >
                                                                        View
                                                                        Resource
                                                                    </a>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleResourceComplete(
                                                                                resource.title
                                                                            )
                                                                        }
                                                                        className={`px-3 py-1 rounded-full text-sm ${
                                                                            completedResources.has(
                                                                                resource.title
                                                                            )
                                                                                ? "bg-green-100 text-green-800"
                                                                                : "bg-blue-100 text-blue-800"
                                                                        }`}
                                                                    >
                                                                        {completedResources.has(
                                                                            resource.title
                                                                        )
                                                                            ? "Completed"
                                                                            : "Mark Complete"}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "progress" && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">
                                    Detailed Progress
                                </h2>
                                <div className="space-y-6">
                                    {modules.map((module) => {
                                        const moduleResources =
                                            module.resources.length;
                                        const completedModuleResources =
                                            module.resources.filter(
                                                (resource) =>
                                                    completedResources.has(
                                                        resource.title
                                                    )
                                            ).length;
                                        const moduleProgress =
                                            (completedModuleResources /
                                                moduleResources) *
                                            100;

                                        return (
                                            <div
                                                key={module.name}
                                                className="space-y-2"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">
                                                        {module.name}
                                                    </span>
                                                    <span className="text-gray-900 font-medium">
                                                        {Math.round(
                                                            moduleProgress
                                                        )}
                                                        %
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-blue-600 h-2 rounded-full"
                                                        style={{
                                                            width: `${moduleProgress}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {completedModuleResources}{" "}
                                                    of {moduleResources}{" "}
                                                    resources completed
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
