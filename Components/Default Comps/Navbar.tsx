"use client";
// import DarkModeToggle from "./DarkModeToggle";
// import { useTheme } from "../Providers/ThemeProvider";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  // const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="mx-auto w-full fixed ">
      <h1>navbar</h1>
      {/* <DarkModeToggle darkMode={darkMode} onDarkModeToggle={toggleDarkMode} /> */}
    </div>
  );
}

export default Navbar;
