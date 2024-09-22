import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
    const socialMediaPlatforms = [
        {
            name: "Facebook",
            icon: FacebookIcon,
            url: "https://facebook.com",
            color: "bg-blue-600 hover:bg-blue-700",
        },
        {
            name: "Twitter",
            icon: GitHubIcon,
            url: "https://twitter.com",
            color: "bg-sky-500 hover:bg-sky-600",
        },
        {
            name: "Instagram",
            icon: InstagramIcon,
            url: "https://instagram.com",
            color: "bg-pink-600 hover:bg-pink-700",
        },
        {
            name: "LinkedIn",
            icon: LinkedInIcon,
            url: "https://linkedin.com",
            color: "bg-blue-700 hover:bg-blue-800",
        },
        {
            name: "YouTube",
            icon: YouTubeIcon,
            url: "https://youtube.com",
            color: "bg-red-600 hover:bg-red-700",
        },
    ];
    return (
        //
        <footer className="bg-white dark:bg-gray-900 ">
            <div className="mx-auto max-w-screen-xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md">
                    <strong className="block text-center text-lg font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Leave Us Your Phone Number, We Can Call You
                    </strong>

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email">
                                {" "}
                                Phone{" "}
                            </label>

                            <input
                                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                id="phone"
                                type="tel"
                                placeholder="+251922761594"
                            />

                            <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                                Connect
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-4 p-3 bg-background rounded-lg shadow-md">
                    <h2 className="text-2xl text-center font-bold mb-4 text-foreground">
                        Connect with me on Socail Media
                    </h2>
                    <ul className="flex justify-around items-center">
                        {socialMediaPlatforms.map((platform) => (
                            <li key={platform.name}>
                                <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center px-4 py-2 rounded-full text-white transition-colors duration-300 ${platform.color}`}
                                >
                                    <platform.icon className=" md:mr-2 h-4 w-4" />
                                    <span className="hidden md:flex">
                                        {platform.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <p className="text-center text-md/relaxed text-gray-500 dark:text-gray-400">
                        © Infinity 2024. All rights reserved.
                        <br />
                        Created by{" "}
                        <a
                            href="https://yared21.netlify.app/"
                            className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        >
                            Yared Kebede.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
