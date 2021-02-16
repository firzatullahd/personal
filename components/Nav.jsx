import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <h1>
        <Link href="/">
          <a id="logo">Capture</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/">
            <a>
              1. About Us
              <motion.div
                className="line-animation"
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "50%" : "0%" }}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>
              2. Our Work
              <motion.div
                className="line-animation"
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/work" ? "50%" : "0%" }}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              3. Contact Us
              <motion.div
                className="line-animation"
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
              />{" "}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
