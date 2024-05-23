import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from "./Components/Footer/Footer.jsx";
import darkModeContext from './Context/DarkModeContext.js'

import "./App.css";
import { useState } from "react";

function App() {

  let [darkMode ,setDarkMode] = useState(false);


  return (
    <>
    <darkModeContext.Provider value={{darkMode,setDarkMode}}>
      <div style={{background : darkMode ? '	#232F34' : '', color : darkMode ? 'white': ''}}>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
      </darkModeContext.Provider>
    </>
  );
}

export default App;
