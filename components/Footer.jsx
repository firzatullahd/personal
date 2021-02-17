import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <h3>copyright &copy; 2021</h3>
      <h3>
        Designed by{" "}
        <Link href="/">
          <span>firzatullahd</span>
        </Link>
      </h3>
    </nav>
  );
};

export default Footer;
