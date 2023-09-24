import React from "react";
import { motion } from "framer-motion";

function Points({ description }) {
  return (
    <div className="pointWrapper">
      <div className="circle-img">
        <motion.img
          src="circle.svg"
          height="55px"
          initial={{ opacity: 0, rotate: 0, left: -200 }}
          whileInView={{ opacity: 1, rotate: 360, left: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <p
        // style={{ margin: "20px 0 80px 5px" }}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}

export default Points;
