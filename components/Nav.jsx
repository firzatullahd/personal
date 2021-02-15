import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <StyledNav>
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
              <StyledLine
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
              <StyledLine
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
              <StyledLine
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
              />{" "}
            </a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  background: #282828;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  @media (max-width: 560px) {
    flex-direction: column;
    padding: 2rem 0rem 0.5rem;

    ul {
      padding: 2rem;
      width: 100%;
      justify-content: space-around;
      li {
        padding: 0;
      }
    }
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 560px) {
    left: 10%;
  }
`;

export default Nav;