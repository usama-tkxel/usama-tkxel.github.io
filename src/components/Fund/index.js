import React from "react";
import FundPoints from "./FundPoints";
import { motion } from "framer-motion";
import "./fund.scss";

function Fund() {
  return (
    <div className="fundContainer">
      <div className="funding-box" style={{}}>
        <div className="heading-box">
          <div className="heading">
            <motion.span
              initial={{
                opacity: 0,
                y: "200%",
                x: "-50%",
                scale: 0,
                left: 200,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                left: 0,
              }}
              transition={{ duration: 0.5 }}
              className="Step_heading1"
            >
              Support
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                y: "200%",
                x: "-50%",
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
              transition={{ duration: 0.75 }}
              className="Step_heading2"
            >
              {" "}
              at every
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
                y: "200%",
                x: "-50%",
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
              transition={{ duration: 1 }}
              className="Step_heading3"
            >
              {" "}
              Step
            </motion.span>
          </div>
        </div>

        <div className="fundPoints-container">
          <FundPoints
            description={`
  <span>Participate in the <a href="#" style="color: #84d7e9">loyalty program</a>.</span>
    <span>
      Pay for the <br /> service online to get bonuses for our other <br />services.
    </span>
    <span>We have a lot of bonuses!</span>
  `}
            delay={1}
          />
          <FundPoints
            description={`
            <span>You can help other people: choose a donation</span>
            <span><br/>fund and share the link with your friends!</span>
            
          `}
            delay={1.3}
          />
          <motion.button
            style={{
              width: "90%",
              height: "60px",
              borderRadius: "35px",
              cursor: "pointer",
              color: "#ff6476",
              fontSize: "25px",
              background: "#0B0F17",
              border: "1px solid #ff6476",
            }}
            initial={{
              opacity: 0,
              // y: "200%",
              // x: "-50%",
              scale: 0,
              left: -200,
            }}
            whileInView={{
              opacity: 1,
              // y: 0,
              // x: 0,
              scale: 1,
              left: 0,
            }}
            transition={{ duration: 1.4 }}
          >
            Choose a fund
          </motion.button>
        </div>

        <motion.div className="img-container">
          <motion.img
            alt="bannerBallon"
            src="bannerBallon.jpg"
            initial={{ opacity: 0, y: "100%", scale: 1, left: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, left: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Fund;
