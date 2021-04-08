import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { fade } from "../util/animation";
import useScroll from "../util/useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="journeys-section"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>Journey</h2>
      <AnimateSharedLayout>
        <Toggle title="Advancing Career Program: Back-End Class">
          <p>
            <span>Alterra Academy</span>
            {" | "}Mar 2021 - Apr 2021
          </p>
          <p>
            Courses: Golang, Algorithms, System Design, ORM, Middleware, REST
            API, Unit testing
          </p>
        </Toggle>
        <Toggle title="Web Developer">
          <p>
            <span>Asia Commerce </span> {" | "}Sep 2020 – Jan 2021
          </p>
          <h5> Web Scraping Product Data</h5>
          <p>
            Developed a program to automate web scraping to extract product data
            from several marketplaces: Rakuten, BigC, and Amazon and scheduled
            every week. Technologies used in this project were Octoparse REST
            API, PHP, and MySQL
          </p>
          <h5>Development Ace Commerce Mobile App</h5>
          <p>
            Ace Commerce is a community platform that has been created using
            WordPress, in this project I am responsible for developing a mobile
            app version with Webview using React Native, and also adding a push
            notification feature using OneSignal.
          </p>
        </Toggle>
        <Toggle title="Bachelor of Engineering: Mechatronics Engineering">
          <p>
            <span>Politeknik Elektronika Negeri Surabaya</span>
            {" | "}
            Aug 2015 – Aug 2019
          </p>
          <p>
            Courses: Programming Workshop, Robotics (C, C++), Image Processing
            Workshop (Python), Numerical Method Workshop (Matlab) and, Arduino.
            GPA 3.31 / 4.00
          </p>
          <h5>
            1st Author - Institute of Electrical and Electronics Engineers
            Xplore (IEEE Xplore)(2019)
          </h5>
          <p>
            Present a paper with title of 2DoFs Teleoperation Wearable Robots
            for Post Stroke Rehabilitation at the IES 2019 conference
            (International Electronic Symposium, regarding the wearable robot
            that I have developed, with the aim of assisting the rehabilitation
            of post-stroke patients.
          </p>
        </Toggle>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default FaqSection;
