import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import "./expertSection.scss";

const slides = [
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
  {
    image: "people.png",
    title: "Emiko Sata",
    subTitle: "Insurance appraiser",
    description: `With over twenty years of industry
    experience, 'Darcy's insurance products*
    has learned a lot. The one thing we know
    for sure is that we're all about you. If you
    find searching for insurance frustrating.
    we are here to help.`,
  },
];

function ExpertSection() {
  return (
    <div className="Expert-Container">
      <div className="swiper-box">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide) => {
            const { description, image, subTitle, title } = slide || {};
            return (
              <SwiperSlide>
                <motion.div
                  className="swipper-inner-box"
                  initial={{
                    opacity: 0,
                    x: "50%",
                    y: "50%",
                    scale: 0,
                    left: -200,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, left: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="img-box">
                    <motion.img
                      src={image}
                      alt={title}
                      initial={{
                        opacity: 0,
                        y: "10%",
                        scale: 0,
                        // left: -100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        left: 0,
                      }}
                      transition={{ duration: 1.3 }}
                    />
                  </div>

                  <div className="swiper-heading">
                    <motion.h2
                      initial={{
                        opacity: 0,
                        y: "100%",
                        scale: 0,
                        left: 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        left: 0,
                      }}
                      transition={{ duration: 1.35 }}
                    >
                      {title}
                    </motion.h2>
                    <motion.p
                      className="job-title"
                      initial={{
                        opacity: 0,
                        y: "100%",
                        scale: 0,
                        left: 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        left: 0,
                      }}
                      transition={{ duration: 1.45 }}
                    >
                      {subTitle}
                    </motion.p>
                    <motion.p
                      className="description"
                      initial={{
                        opacity: 0,
                        y: "100%",
                        scale: 0,
                        left: 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        left: 0,
                      }}
                      transition={{ duration: 1.6 }}
                    >
                      {description}
                    </motion.p>

                    <motion.button
                      className="GetNotificationBtn"
                      initial={{
                        opacity: 0,
                        y: "100%",
                        scale: 0,
                        left: 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        left: 0,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{ duration: 1.7 }}
                    >
                      Get a consultation
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="heading-box">
        <motion.img
          src={"circle.svg"}
          alt="circle"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div style={{ display: "flex", flexDirection: "column" }}>
          <motion.h3
            className="heading"
            initial={{ opacity: 0, x: "100%", y: "60%", scale: 0, left: -200 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, left: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our
          </motion.h3>
          <div>
            <motion.h3
              className="heading"
              initial={{
                opacity: 0,
                x: "100%",
                y: "80%",
                scale: 0,
                left: -200,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, left: 0 }}
              transition={{ duration: 0.75 }}
            >
              experts
            </motion.h3>
            <motion.h3
              className="heading"
              initial={{
                opacity: 0,
                x: "100%",
                y: "60%",
                scale: 0,
                left: -200,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, left: 0 }}
              transition={{ duration: 1 }}
            >
              say
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExpertSection;
