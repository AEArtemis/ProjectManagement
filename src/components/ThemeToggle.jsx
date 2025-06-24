import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="flex items-center justify-center py-4">
      <label className="relative inline-block w-[38px] h-[20px] cursor-pointer border rounded-xl">
        <input
          type="checkbox"
          className="peer hidden"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />

        {/* Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 peer-checked:from-gray-800 peer-checked:to-black transition-all duration-500" />

        {/* Stars (dark mode) */}
        <div className="absolute top-[3px] left-[4px] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-[9px] left-[10px] w-[2px] h-[2px] bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-[6px] left-[16px] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-500" />

        {/* Clouds (light mode) */}
        <div className="absolute top-[4px] right-[8px] w-[8px] h-[5px] bg-white rounded-full shadow-md opacity-100 peer-checked:opacity-0 transition-opacity duration-500" />
        <div className="absolute top-[3px] right-[4px] w-[7px] h-[6px] bg-white rounded-full shadow-md opacity-100 peer-checked:opacity-0 transition-opacity duration-500" />
        <div className="absolute top-[6px] right-[2px] w-[10px] h-[6px] bg-white rounded-full shadow-md opacity-100 peer-checked:opacity-0 transition-opacity duration-500" />

        {/* Toggle ball (sun/moon) */}
        <div className="absolute top-[2px] left-[2px] w-[14px] h-[14px] rounded-full bg-yellow-400 peer-checked:translate-x-[18px] peer-checked:bg-white transition-transform duration-500 flex items-center justify-center">
          <div className="text-white peer-checked:text-gray-800 transition-colors duration-300">
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[7px] h-[7px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.75 12.002c0-5.385-4.365-9.75-9.75-9.75a9.707 9.707 0 0 0-3.46.633 9.748 9.748 0 0 1 9.117 13.303A9.708 9.708 0 0 0 21.75 12.002Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[7px] h-[7px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 2.25Zm6.364 3.136a.75.75 0 0 1 1.06 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm9 5.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H20.25a.75.75 0 0 1 .75.75ZM6.75 12a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5H6a.75.75 0 0 1 .75.75Zm11.689 5.5a.75.75 0 0 1 0 1.061l-1.06 1.06a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.06 0ZM12 18.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75Zm-6.364-1.25a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061Zm1.06-10.607a.75.75 0 0 1 0 1.06L5.636 7.524a.75.75 0 0 1-1.06-1.06l1.06-1.061a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
