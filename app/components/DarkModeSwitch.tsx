"use client";

import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  //get the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="test-xl cursor-pointer hover:text-amber-500"
            size={24}
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="test-xl cursor-pointer hover:text-amber-500"
            size={24}
          />
        ))}
    </div>
  );
}
