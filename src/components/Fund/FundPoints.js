import React from "react";
import { motion } from "framer-motion";
import "./fund.scss";

function FundPoints({ description, delay }) {
  return (
    <motion.div
      className="fund-points-box"
      initial={{
        opacity: 0,
        y: "100%",
        // x: "50%",
        scale: 0,
        left: -200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        left: 0,
      }}
      transition={{ duration: delay }}
    >
      <div className="icon-box">
        <motion.img
          src="circle.svg"
          height="55px"
          initial={{ opacity: 0, rotate: 0, left: -200 }}
          whileInView={{ opacity: 1, rotate: 360, left: 0 }}
          transition={{ duration: delay+0.25 }}
          className="circle-img"
        />
      </div>
      <p
        className="title-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </motion.div>
  );
}

export default FundPoints;
