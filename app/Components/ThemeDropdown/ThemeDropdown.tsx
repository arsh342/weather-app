"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
      <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center p-2"
      >
        <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
                theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
        />
        <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
        />
        <span className="sr-only">Toggle theme</span>
      </button>
  );
}

export default ThemeToggle;
