import React from "react";
import styled from "styled-components";
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

const OurWork = ({ movies }) => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledFrame1 variants={slider}></StyledFrame1>
      <StyledFrame2 variants={slider}></StyledFrame2>
      <StyledFrame3 variants={slider}></StyledFrame3>
      <StyledFrame4 variants={slider}></StyledFrame4>
      {movies.map((movie) => (
        <StyledMovie key={movie.title}>
          <motion.h2 variants={fade}>{movie.title}</motion.h2>
          <motion.div className="line" variants={lineAnimation}></motion.div>
          <Link href={movie.url}>
            <a>
              <StyledHide>
                <motion.img
                  variants={photoAnimation}
                  src={movie.mainImg}
                  alt={movie.title}
                />
              </StyledHide>
            </a>
          </Link>
        </StyledMovie>
      ))}
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 8rem;
  z-index: 1;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 560px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  z-index: 2;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media (max-width: 560px) {
      height: 50vh;
    }
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 10;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: #fffebf;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
