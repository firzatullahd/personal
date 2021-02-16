import React from "react";
import { motion } from "framer-motion";
import { fade } from "../util/animation";
import useScroll from "../util/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="services-section"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src="./img/clock.svg" alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="./img/diaphragm.svg" alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="./img/teamwork.svg" alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="./img/money.svg" alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="./img/home2.png" alt="expensive camera" />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
