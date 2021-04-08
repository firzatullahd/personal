import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className="journey-title"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle && <div className="journey-description">{children}</div>}
      <div className="journey-line"></div>
    </motion.div>
  );
};

export default Toggle;
