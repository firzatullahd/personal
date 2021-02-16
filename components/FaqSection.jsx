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
      className="faq-section"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do i Start?">
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            maxime repudiandae! Recusandae dolorum reiciendis ad doloribus
            quaerat odio, inventore molestias.
          </p>
        </Toggle>
        <Toggle title="Daily Schedule">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, distinctio! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Consectetur, consequatur!
          </p>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            dolore nobis, nemo consectetur eligendi doloribus quia enim aliquam
            adipisci quisquam repudiandae expedita molestiae. Vero mollitia cum
            natus architecto unde qui?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
            omnis.
          </p>
        </Toggle>
        <Toggle title="What Products Do We Offer">
          <p>Lorem, ipsum.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus corrupti cupiditate necessitatibus facilis nam
            praesentium.
          </p>
        </Toggle>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default FaqSection;
