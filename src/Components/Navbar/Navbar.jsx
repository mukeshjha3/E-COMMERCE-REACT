import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import LightDarkToggleButton from "./LightDarkToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import darkModeContext from "../../Context/DarkModeContext";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar" style={{ color: darkMode ? "white" : "black" }}>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
        <LightDarkToggleButton
          className="toggle-button"
          style={{ padding: "1.5rem" }}
        />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link
            to="/"
            className="nav-menu-link"
            style={{
              textDecoration: "none",
              color: darkMode ? "white" : "black", // Corrected syntax here
            }}
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link
            to="/mens"
            className="nav-menu-link"
            style={{
              textDecoration: "none",
              color: darkMode ? "white" : "black", // Corrected syntax here
            }}
          >
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("women")}>
          <Link
            to="/womens"
            className="nav-menu-link"
            style={{
              textDecoration: "none",
              color: darkMode ? "white" : "black", // Corrected syntax here
            }}
          >
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link
            to="/kids"
            className="nav-menu-link"
            style={{
              textDecoration: "none",
              color: darkMode ? "white" : "black", // Corrected syntax here
            }}
          >
            kid
          </Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search-here" />
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="fa-icon"
            style={{ height: "40px" }}
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
