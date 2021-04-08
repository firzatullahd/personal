import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import JourneysSection from "../components/JourneysSection";
import WhatsappBadge from "../components/WhatsappBadge";
import { pageAnimation } from "../util/animation";
import ScrollTop from "../components/ScrollTop";
import Head from "next/Head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>I'm firzatullahd</title>
      </Head>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <SkillsSection />
        <JourneysSection />
        <WhatsappBadge />
        <ScrollTop />
      </motion.div>
    </>
  );
};

export default AboutUs;
