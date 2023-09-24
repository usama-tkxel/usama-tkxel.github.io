import React from "react";
import { motion } from "framer-motion";
import Points from "../Points";
import "./banner.scss";

function Banner() {
  return (
    <div className="Banner-section">
      <motion.div
        className="heading-side-banner"
        initial={{ opacity: 0, x: "-50%", y: "50%", scale: 0, left: -200 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, left: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="main-heading">Darcy's Insurance products</h1>
        {/* <p style={{ margin: 0 }}>Darcy's</p>
        <p style={{ margin: 0 }}>Insurance</p>
        <p style={{ margin: 0 }}>products</p> */}
      </motion.div>
      <div className="right-side-banner">
        <motion.div
          className="pointsContainer"
          initial={{ opacity: 0, x: "-100%", scale: 0, left: -200 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, left: 0 }}
          transition={{ duration: 0.75 }}
        >
          <Points
            description={`<span>Our <a href="#" style="color: #84d7e9">plan</a> are saving policyholders 30% - 60% on premiums<span/>`}
          />
          <Points
            description={`We offer a choice of low dedactibles and include no cost value-added services.`}
          />
        </motion.div>

        <motion.div className="img-box">
          <motion.img
            src="bannerBallon.jpg"
            height="700px"
            initial={{ opacity: 0, y: "100%", scale: 1, left: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, left: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
