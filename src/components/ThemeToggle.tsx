import React from "react";

export default function ThemeToggle({
  theme,
  setTheme,
  label,
}: {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  label: string;
}) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      className="iconBtn"
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      type="button"
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 18a6 6 0 0 1-6-6c0-2.7 1.8-5 4.3-5.7a.9.9 0 0 1 1.1 1.1A4.2 4.2 0 0 0 12 18a4.2 4.2 0 0 0 4.6-2.6.9.9 0 0 1 1.1-1.1A6 6 0 0 1 12 18Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-13.5a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1Zm0 14.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1ZM3.5 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H4.5a1 1 0 0 1-1-1Zm14 0a1 1 0 0 1 1-1H20a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM5.1 5.1a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4Zm12.4 12.4a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4ZM18.9 5.1a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0ZM6.5 17.5a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0Z"
            fill="currentColor"
          />
        </svg>
      )}
      <span className="iconBtn__shine" aria-hidden="true" />
    </button>
  );
}
