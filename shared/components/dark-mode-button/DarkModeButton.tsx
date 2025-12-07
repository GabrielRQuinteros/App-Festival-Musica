'use client';

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const DarkModeButton = () => {

    const { theme, setTheme } = useTheme();
    return (
        <button
            className="z-30 p-2 border border-r-0 dark:border-zinc-200 border-zinc-900 bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 transition fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg text-3xl"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
            {theme === "dark" ? <FiSun /> : <FiMoon/>}
        </button>
    );
}