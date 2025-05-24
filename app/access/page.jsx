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
    BarChart2,
    Calendar,
    Bell,
    Mail,
    Settings,
    LogOut,
} from "lucide-react";
import { modules } from "../../assets/resources.js";

export default function Component() {
    const [openModule, setOpenModule] = useState(null);
    const [completedResources, setCompletedResources] = useState(new Set());
    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState("resources");
    const [showUserMenu, setShowUserMenu] = useState(false);

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
        <div className="min-h-screen bg-gray-900">
            {/* Top Navigation Bar */}
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-white">
                                Student Dashboard
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-300 hover:text-white relative">
                                <Bell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setShowUserMenu(!showUserMenu)
                                    }
                                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-700"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                        {user.name
                                            ? user.name[0].toUpperCase()
                                            : "U"}
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">
                                        {user.name}
                                    </span>
                                </button>
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                                        <a
                                            href="#"
                                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                        >
                                            <User className="h-4 w-4 mr-2" />
                                            Profile
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                        >
                                            <Settings className="h-4 w-4 mr-2" />
                                            Settings
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                                        >
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Logout
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-white">
                                Welcome back, {user.name}!
                            </h2>
                            <p className="text-gray-300">
                                Track your progress and continue your learning
                                journey
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                                <BookOpen className="h-12 w-12 text-blue-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-900 text-blue-400">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">
                                    Total Resources
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {totalResources}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-900 text-green-400">
                                <Award className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">
                                    Completed
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {completedResources.size}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-900 text-purple-400">
                                <BarChart2 className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">
                                    Progress
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {Math.round(progressPercentage)}%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-yellow-900 text-yellow-400">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">
                                    Time Spent
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    12h 30m
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">
                            Overall Progress
                        </h3>
                        <span className="text-sm font-medium text-gray-400">
                            {Math.round(progressPercentage)}% Complete
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="border-b border-gray-700 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab("resources")}
                            className={`${
                                activeTab === "resources"
                                    ? "border-blue-500 text-blue-400"
                                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
                        >
                            Learning Resources
                        </button>
                        <button
                            onClick={() => setActiveTab("schedule")}
                            className={`${
                                activeTab === "schedule"
                                    ? "border-blue-500 text-blue-400"
                                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
                        >
                            Schedule
                        </button>
                        <button
                            onClick={() => setActiveTab("achievements")}
                            className={`${
                                activeTab === "achievements"
                                    ? "border-blue-500 text-blue-400"
                                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
                        >
                            Achievements
                        </button>
                    </nav>
                </div>

                {/* Content Area */}
                {activeTab === "resources" && (
                    <div className="space-y-4">
                        {modules.map((module) => (
                            <div
                                key={module.name}
                                className="bg-gray-800 shadow-md rounded-xl overflow-hidden transform hover:shadow-lg transition-shadow duration-200 border border-gray-700"
                            >
                                <button
                                    className="w-full p-4 text-left font-semibold flex justify-between items-center focus:outline-none hover:bg-gray-700 text-white"
                                    onClick={() =>
                                        handleModuleClick(module.name)
                                    }
                                >
                                    <div className="flex items-center">
                                        {module.icon}
                                        <span className="ml-2">
                                            {module.name}
                                        </span>
                                    </div>
                                    {openModule === module.name ? (
                                        <ChevronUp className="text-gray-400" />
                                    ) : (
                                        <ChevronDown className="text-gray-400" />
                                    )}
                                </button>
                                {openModule === module.name && (
                                    <div className="p-4 border-t border-gray-700">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gray-700">
                                                    <th className="text-left p-2 text-sm font-medium text-gray-300">
                                                        Title
                                                    </th>
                                                    <th className="text-left p-2 text-sm font-medium text-gray-300 hidden md:table-cell">
                                                        Type
                                                    </th>
                                                    <th className="text-left p-2 text-sm font-medium text-gray-300 hidden md:table-cell">
                                                        Description
                                                    </th>
                                                    <th className="p-2 text-sm font-medium text-gray-300">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-700">
                                                {module.resources.map(
                                                    (resource, index) => (
                                                        <tr
                                                            key={index}
                                                            className="hover:bg-gray-700"
                                                        >
                                                            <td className="p-2 text-sm text-gray-300">
                                                                {resource.title}
                                                            </td>
                                                            <td className="p-2 text-sm text-gray-400 hidden md:table-cell">
                                                                {resource.type}
                                                            </td>
                                                            <td className="p-2 text-sm text-gray-400 hidden md:table-cell">
                                                                {
                                                                    resource.description
                                                                }
                                                            </td>
                                                            <td className="p-2">
                                                                <a
                                                                    href={
                                                                        resource.url
                                                                    }
                                                                    target="_blank"
                                                                    download={
                                                                        resource.title
                                                                    }
                                                                >
                                                                    <button
                                                                        className={`py-1 px-3 rounded-full text-sm font-medium flex items-center transition-colors duration-200 ${
                                                                            completedResources.has(
                                                                                resource.title
                                                                            )
                                                                                ? "bg-green-900 text-green-400 hover:bg-green-800"
                                                                                : "bg-blue-900 text-blue-400 hover:bg-blue-800"
                                                                        }`}
                                                                        onClick={() =>
                                                                            handleResourceComplete(
                                                                                resource.title
                                                                            )
                                                                        }
                                                                    >
                                                                        <Download className="w-4 h-4 mr-1" />
                                                                        {completedResources.has(
                                                                            resource.title
                                                                        )
                                                                            ? "Completed"
                                                                            : "Start"}
                                                                    </button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "schedule" && (
                    <div className="bg-gray-800 shadow-md rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-white">
                                Upcoming Sessions
                            </h3>
                            <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-200">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            10
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-medium text-white">
                                        Web Development Workshop
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        10:00 AM - 12:00 PM
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-200">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            12
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-medium text-white">
                                        Code Review Session
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        2:00 PM - 3:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "achievements" && (
                    <div className="bg-gray-800 shadow-md rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-6">
                            Your Achievements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl text-center transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-sm font-medium text-white">
                                    Fast Learner
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    Completed 5 resources in one day
                                </p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl text-center transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-sm font-medium text-white">
                                    Knowledge Seeker
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    Completed all beginner resources
                                </p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl text-center transform hover:scale-105 transition-transform duration-200 border border-gray-700">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart2 className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-sm font-medium text-white">
                                    Consistent Learner
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    7-day learning streak
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
