import React from "react";
import WhatsappBadge from "../../components/WhatsappBadge";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
} from "../../util/animation";
import ScrollTop from "../../components/ScrollTop";
import Head from "next/Head";
import projects from "../../util/projects.json";

const OurWork = () => {
  return (
    <>
      <Head>
        <title>Projects | firzatullahd</title>
      </Head>
      <motion.div
        className="projects-page"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="frame1" variants={slider}></motion.div>
        <motion.div className="frame2" variants={slider}></motion.div>
        <motion.div className="frame3" variants={slider}></motion.div>
        <motion.div className="frame4" variants={slider}></motion.div>
        {projects.map((project) => (
          <div className="project-movie" key={project.title}>
            <div className="description">
              <motion.h2 variants={fade}>{project.title}</motion.h2>
              <motion.div
                className="line"
                variants={lineAnimation}
              ></motion.div>
              <motion.p variants={fade}>{project.description}</motion.p>
              {project.deployment && (
                <a target="_blank" href={project.deployment}>
                  <motion.button variants={fade}>Visit Project</motion.button>
                </a>
              )}
              {project.repo && (
                <motion.a variants={fade} target="_blank" href={project.repo}>
                  Visit Github Repo
                </motion.a>
              )}
            </div>

            <div className="hide">
              <motion.img
                variants={photoAnimation}
                src={project.mainImg}
                alt={project.title}
              />
            </div>
          </div>
        ))}
        <WhatsappBadge />
        <ScrollTop />
      </motion.div>
    </>
  );
};
export default OurWork;
