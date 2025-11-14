import { useState, useEffect } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState("auto");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "auto") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      root.setAttribute(
        "data-theme",
        prefersDarkScheme.matches ? "dark" : "light"
      );
    } else {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case "auto":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;
      case "dark":
        newTheme = "auto";
        break;
    }
    setTheme(newTheme);
  };

  const renderText = () => {
    switch (theme) {
      case "auto":
        return "Auto";
      case "light":
        return "Light ☀️";
      case "dark":
        return "Dark 🌙";
    }
  };

  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      <b>Theme:</b> {renderText()}
    </div>
  );
}

export default ToggleTheme;
