import React from "react";
import { motion } from "framer-motion";
import { fade } from "../util/animation";
import useScroll from "../util/useScroll";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiHeroku,
  SiJest,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiPostman,
  SiPrettier,
  SiSass,
  SiStrapi,
  SiSwagger,
  SiVisualstudiocode,
  SiZeit,
  SiEslint,
  SiLaravel,
} from "react-icons/si";
//gorm, echo,express

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="skills-section"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="description">
        <h2>
          <span>Tech</span> Skills.
        </h2>
        <div className="cards">
          <div className="card">
            <SiHtml5 size="3.5rem" color="#FC490B" />
          </div>
          <div className="card">
            <SiCss3 size="3.5rem" color="3595CF" />
          </div>
          <div className="card">
            <SiJavascript size="3.5rem" color="#E9D44D" />
          </div>
          <div className="card">
            <SiReact size="3.5rem" color="#5ED3F3" />
          </div>
          <div className="card">
            <SiRedux size="3.5rem" color="#7248B6" />
          </div>
          <div className="card">
            <SiFirebase size="3.5rem" color="#F7C52B" />
          </div>
          <div className="card">
            <SiGit size="3.5rem" color="#E94E31" />
          </div>
          <div className="card">
            <SiGithub size="3.5rem" color="#000" />
          </div>
          <div className="card">
            <SiHeroku size="3.5rem" color="#645FA1" />
          </div>
          <div className="card">
            <SiJest size="3.5rem" color="#99424F`" />
          </div>
          <div className="card">
            <SiMariadb size="3.5rem" color="#003343" />
          </div>
          <div className="card">
            <SiMongodb size="3.5rem" color="#3E9937" />
          </div>
          <div className="card">
            <SiMysql size="3.5rem" color="#00618A" />
          </div>
          <div className="card">
            <SiNodeDotJs size="3.5rem" color="#5AAA45" />
          </div>
          <div className="card">
            <SiNextDotJs size="3.5rem" color="#000" />
          </div>
          <div className="card">
            <SiPostman size="3.5rem" color="#F15A24" />
          </div>
          <div className="card">
            <SiEslint size="3.5rem" color="#3831CA" />
          </div>
          <div className="card">
            <SiPrettier size="3.5rem" color="#33434D" />
          </div>
          <div className="card">
            <SiSass size="3.5rem" color="#C76395" />
          </div>
          <div className="card">
            <SiVisualstudiocode size="3.5rem" color="#0175C5" />
          </div>
          <div className="card">
            <SiStrapi size="3.5rem" color="#8A71F7" />
          </div>
          <div className="card">
            <SiGo size="3.5rem" color="#67D0DE" />
          </div>
          <div className="card">
            <SiPhp size="3.5rem" color="#7377AD" />
          </div>
          <div className="card">
            <SiLaravel size="3.5rem" color="#FF291A" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="./img/undraw_dev_productivity.svg" alt="svg" />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
