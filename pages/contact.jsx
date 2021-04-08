import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../util/animation";
import ScrollTop from "../components/ScrollTop";
import Head from "next/Head";
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact | firzatullahd</title>
      </Head>
      <motion.div
        className="contact-page"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="contact-title">
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              We could get in touch – What do you say?
            </motion.h2>
          </div>
        </div>
        <div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <a href="https://wa.me/+6285232301377" target="_blank">
                <h3>
                  <SiWhatsapp /> Will you send me a message? <span>Yes</span>
                </h3>
              </a>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=firzatullahdwikoramadhan@gmail.com"
                target="_blank"
              >
                <h3>
                  <SiGmail /> Will you send me an email? <span>Of course</span>
                </h3>
              </a>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <a href="https://linkedin.com/in/firzatullahd" target="_blank">
                <h3>
                  <SiLinkedin /> Will you contact me through Linkedin?{" "}
                  <span>Why not?</span>
                </h3>
              </a>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <a href="https://github.com/firzatullahd" target="_blank">
                <h3>
                  <SiGithub /> Will you visit my Github repos?{" "}
                  <span>Certainly</span>
                </h3>
              </a>
            </motion.div>
          </div>
        </div>
        <ScrollTop />
      </motion.div>
    </>
  );
};

export default ContactUs;
