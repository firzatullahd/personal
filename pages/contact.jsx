import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../util/animation";
import ScrollTop from "../components/ScrollTop";
import Head from "next/Head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Work</title>
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
            <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
          </div>
        </div>
        <div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <div className="circle" />
              <h2>Send us a message</h2>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <div className="circle" />
              <h2>Send us an email</h2>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="contact-section" variants={titleAnimation}>
              <div className="circle" />
              <h2>Contact us through our social media</h2>
            </motion.div>
          </div>
        </div>
        <ScrollTop />
      </motion.div>
    </>
  );
};

export default ContactUs;
