import { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Logout");

  const login = () => {
    if (isLoggedIn === "Logout") setIsLoggedIn("Login");
    else setIsLoggedIn("Logout");
  };
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} alt="logo image" />
      </Link>

      <h1 className="title">Food Villa</h1>

      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="contact">
          <li>Contact</li>
        </Link>

        <Link to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
      <button onClick={login}>{isLoggedIn}</button>
    </div>
  );
};

export default Header;
