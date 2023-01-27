import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out ">
      {theme === "dark" ? (
        <SunIcon
          className="h-5 w-5 text-gray-500 dark:text-yellow-400"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <MoonIcon
          className="h-5 w-5 text-black dark:text-gray-400"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
};

export default Toggle;
