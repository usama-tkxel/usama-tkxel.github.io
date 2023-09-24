import React from "react";
import { motion } from "framer-motion";
import "./service.scss";

function Services() {
  const services = [
    {
      image: "home.jpeg",
      title: "Home Insurance",
      width: "50%",
      height: "400px",
      delay: 0.75,
    },
    {
      image: "beachRing.jpeg",
      title: "",
      width: "20%",
      height: "400px",
      borderRadius: "85px",
      delay: 1,
    },
    {
      image: "",
      title: "",
      width: "30%",
      height: "300px",
    },
  ];
  const services2 = [
    {
      image: "vehicle.jpeg",
      title: "Vehicle Damage",
      width: "30%",
      height: "300px",
    },
    {
      image: "mortgage.jpeg",
      title: "Mortgage Insurance",
      width: "300px",
      height: "300px",
    },
    {
      image: "pills.jpeg",
      title: "Medical Expense",
      width: "300px",
      height: "300px",
    },
  ];

  return (
    <div className="container-choice">
      <div className="container-choice-top">
        {services.map((service) => {
          const { image, title, height, width, borderRadius, delay } =
            service || {};
          if (image) {
            return (
              <motion.div
                style={{
                  width: width,
                  height: "100%",
                  borderRadius: borderRadius ? borderRadius : "40px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                className="img-box"
                initial={{
                  opacity: 0,
                  x: "0",
                  y: "100%",
                  scale: 0,
                  skew: title === "Home Insurance" ? -5 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, skew: 0 }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 99,
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: delay }}
              >
                <img src={image} alt={title} />
                {title && (
                  <motion.span
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "16px",
                      background: "#0A0F17",
                      color: "white",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                    initial={{ opacity: 0, x: "-100%", left: 0 }}
                    whileInView={{ opacity: 1, x: 0, left: 32 }}
                    transition={{ duration: 1 }}
                  >
                    {title}
                  </motion.span>
                )}
              </motion.div>
            );
          }

          return (
            <motion.div
              className="best-choice-box"
              initial={{ opacity: 0, x: "0", y: "100%", scale: 0, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.1,
                zIndex: 99,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 1.25 }}
            >
              <h1>Best Choice</h1>
              <p>
                Not all insurance are the same. That's why agency knows that
                your insurance should be customized to fit your situation.
              </p>

              <motion.div
                style={{
                  background: "#FF6476",
                  padding: "10px 30px",
                  position: "absolute",
                  bottom: "15px",
                  left: "16px",
                  borderRadius: "30px",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                View all services
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <div className="container-choice-bottom">
        {services2.map((service2) => {
          const { image, title, height, width, borderRadius } = service2 || {};
          return (
            <motion.div
              className="img-box"
              style={{
                borderRadius: borderRadius ? borderRadius : "40px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              initial={{
                opacity: 0,
                x: "0",
                y: "50%",
                scale: 0,
                skew: title === "Home Insurance" ? -5 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, skew: 0 }}
              whileHover={{
                scale: 1.1,
                zIndex: 99,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 1 }}
            >
              <img src={image} alt={title} />
              {title && (
                <motion.span
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "16px",
                    background: "#0A0F17",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                  initial={{ opacity: 0, x: "-100%", left: 0 }}
                  whileInView={{ opacity: 1, x: 0, left: 32 }}
                  transition={{ duration: 1 }}
                >
                  {title}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
