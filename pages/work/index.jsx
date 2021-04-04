import React from "react";
import Link from "next/link";
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
import movies from "../../util/movies.json";

const OurWork = () => {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <motion.div
        className="work-page"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {movies.map((movie) => (
          <div className="work-movie" key={movie.title}>
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div className="line" variants={lineAnimation}></motion.div>
            <Link href={`/work/${movie.id}`}>
              <a>
                <div className="hide">
                  <motion.img
                    variants={photoAnimation}
                    src={movie.mainImg}
                    alt={movie.title}
                  />
                </div>
              </a>
            </Link>
          </div>
        ))}
        <ScrollTop />
      </motion.div>
    </>
  );
};
export default OurWork;
