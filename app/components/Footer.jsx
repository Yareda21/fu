import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TikTokIcon = ({ color = "#000000" }) => {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="10%"
            height="10%"
        >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg>
    );
};

const Footer = () => {
    const socialMediaPlatforms = [
        {
            name: "Website",
            icon: LanguageIcon,
            url: "https://yared21.netlify.app/",
            color: "bg-blue-600 hover:bg-blue-700",
        },
        {
            name: "GitHub",
            icon: GitHubIcon,
            url: "https://github.com/Yareda21",
            color: "bg-sky-500 hover:bg-sky-600",
        },
        {
            name: "TikTok",
            icon: TikTokIcon,
            url: "https://www.tiktok.com/@yared.kebede",
            color: "bg-pink-600 hover:bg-pink-700",
        },
        {
            name: "LinkedIn",
            icon: LinkedInIcon,
            url: "https://www.linkedin.com/in/yared-kebede/",
            color: "bg-blue-700 hover:bg-blue-800",
        },
        {
            name: "YouTube",
            icon: YouTubeIcon,
            url: "https://www.youtube.com/@infinityCode-21",
            color: "bg-red-600 hover:bg-red-700",
        },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/About" },
        { name: "Courses", href: "/dm" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Register", href: "/register" },
    ];

    const contactInfo = [
        {
            icon: PhoneIcon,
            text: "+251 922 76 15 94",
            href: "tel:+251922761594",
        },
        {
            icon: EmailIcon,
            text: "ykebed40@gmail.com",
            href: "mailto:yaredkebede21@gmail.com",
        },
        {
            icon: LocationOnIcon,
            text: "Megenagna, Addis Ababa, Ethiopia",
            href: "https://maps.google.com/?q=Megenagna,Addis+Ababa",
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">
                            Yared Coding School
                        </h2>
                        <p className="text-sm text-gray-400">
                            Empowering the next generation of developers through
                            quality education and practical experience.
                        </p>
                        <div className="flex space-x-4">
                            {socialMediaPlatforms.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full text-white transition-all duration-300 ${platform.color} hover:scale-110`}
                                >
                                    <platform.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Contact Info
                        </h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-3"
                                >
                                    <item.icon className="h-5 w-5 text-amber-500" />
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates
                            and course offerings.
                        </p>
                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Infinity. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="/privacy"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="/faq"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                FAQ
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-500">
                        Created by{" "}
                        <a
                            href="https://yared21.netlify.app/"
                            className="text-amber-500 hover:text-amber-400 transition-colors duration-300"
                        >
                            Yared Kebede
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
