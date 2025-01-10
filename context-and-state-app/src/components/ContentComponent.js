import React from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

export default function ContentComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Current Theme {theme}</div>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}
