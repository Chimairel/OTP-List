
"use client";
import { useTheme } from "../hooks/useTheme";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all active:scale-90"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      {children}
    </div>
  );
};
