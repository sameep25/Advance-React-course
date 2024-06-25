import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Switch = () => {
  const { theme, toogleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor : theme === "light" ? "white" : "black",
      }}
    >
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toogleTheme}
        />
      </label>
    </div>
  );
};

export default Switch;
