import React, { useContext, useState } from "react";
import "./LightDarkToggleButton.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import darkModeContext from "../../Context/DarkModeContext";

const LightDarkToggleButton = () => {
  let { darkMode, setDarkMode } = useContext(darkModeContext);

  const handleClick = () => {
    console.log(`Theme Changed button has been clicked....`);
    setDarkMode((previous) => !previous);
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <Moon className="moon" />
      <Sun className="sun" />
      <div
        className="t-button"
        style={darkMode ? { left: "4px" } : { right: "4px" }}
      ></div>
    </div>
  );
};

export default LightDarkToggleButton;
