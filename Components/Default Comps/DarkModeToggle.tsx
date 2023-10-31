"use client";
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // Replace with your preferred light and dark mode icons

interface DarkModeToggleProps {
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

function DarkModeToggle({ darkMode, onDarkModeToggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={onDarkModeToggle}
      className="bg-transparent focus:outline-none"
    >
      {darkMode ? (
        <FiSun size={24} color="#fadb14" />
      ) : (
        <FiMoon size={24} color="#000" />
      )}
    </button>
  );
}

export default DarkModeToggle;
