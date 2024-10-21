import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
    return (
        //
        <footer className=" bg-gray-900 ">
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
                                className="w-full rounded-full p-4 pe-32 text-sm font-medium border-gray-700  bg-gray-800 text-white"
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
                        Connect with me on my Socail Media
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
                                    <platform.icon className="md:mr-2 h-4 w-4" />
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
