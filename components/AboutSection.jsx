import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../util/animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dreams </span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link href="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </div>
      <div className="image-container">
        <motion.img
          variants={photoAnimation}
          src="./img/firzatullahd2.png"
          alt="guy with a camera"
        />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
