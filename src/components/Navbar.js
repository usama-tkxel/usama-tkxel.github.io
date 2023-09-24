import React from "react";
import { NavLink } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import key from "../asset/key.svg";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-container">
          <div className="logo">
            {" "}
            <motion.img
              src="circleFour.png"
              initial={{ opacity: 0, rotate: 0, left: -200 }}
              whileInView={{ opacity: 1, rotate: 360, left: 0 }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <motion.li
                initial={{ opacity: 0, scale: 0, left: -200 }}
                whileInView={{ opacity: 1, scale: 1, left: 0 }}
                transition={{ duration: 0.7 }}
              >
                <NavLink to="/">Home</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, left: -200 }}
                whileInView={{ opacity: 1, scale: 1, left: 0 }}
                transition={{ duration: 0.8 }}
              >
                <NavLink to="/blogs">Blogs</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, left: -200 }}
                whileInView={{ opacity: 1, scale: 1, left: 0 }}
                transition={{ duration: 0.9 }}
              >
                <NavLink to="/projects">Projects</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, left: -200 }}
                whileInView={{ opacity: 1, scale: 1, left: 0 }}
                transition={{ duration: 1 }}
              >
                <NavLink to="/about">About</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0, left: -200 }}
                whileInView={{ opacity: 1, scale: 1, left: 0 }}
                transition={{ duration: 1.1 }}
              >
                <NavLink to="/contact">Contact</NavLink>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="nav-btn-wrapper">
          <motion.button
            className="contact-btn"
            initial={{ opacity: 0, scale: 0, left: -200 }}
            whileInView={{ opacity: 1, scale: 1, left: 0 }}
            transition={{ duration: 1.2 }}
          >
            Contact us
          </motion.button>

          <motion.button
            className="login-btn"
            initial={{ opacity: 0, scale: 0, left: -200 }}
            whileInView={{ opacity: 1, scale: 1, left: 0 }}
            transition={{ duration: 1.3 }}
          >
            <img src={key} /> <span>Login</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
