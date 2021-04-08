import React from "react";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";
import { titleAnimation, fade, photoAnimation } from "../util/animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h3 variants={titleAnimation}>Hey, I'm</motion.h3>
            <motion.h2 variants={titleAnimation}>
              <span>Firza</span>tullah Dwiko Ramadhan
            </motion.h2>
          </div>
        </div>
        <a
          target="blank"
          // href="https://mail.google.com/mail/?view=cm&fs=1&to=firzatullahdwikoramadhan@gmail.com"
          href="mailto:firzatullahdwikoramadhan@gmail.com"
        >
          <motion.button variants={fade}>Email me</motion.button>
        </a>

        <motion.a variants={fade} download href="./firzatullah-resume.pdf">
          <MdFileDownload size="1.3rem" /> Download CV
        </motion.a>
      </div>
      <div className="image-container">
        <motion.img
          variants={photoAnimation}
          src="./img/firzatullahd.png"
          alt="guy standing"
        />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
