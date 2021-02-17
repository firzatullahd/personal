import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { pageAnimation } from "../util/animation";
import ScrollTop from "../components/ScrollTop";
import Head from "next/Head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ServicesSection />
        <ScrollTop />
      </motion.div>
    </>
  );
};

export default AboutUs;
