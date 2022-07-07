import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaQuery } from "../../style/mediaQuery";

export const Container = styled(motion.div)`
  background-image: url(/src/assets/library-banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 55vh;
`;
export const Wrap = styled.div`
  height: 100%;
  padding: 30px 0;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.6em;

  background-image: linear-gradient(120deg, #fff, #f5f5f5);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  ${MediaQuery.Tablet} {
    font-size: 2.8em;
  }
  ${MediaQuery.Desktop} {
    font-size: 3.2em;
  }
`;
export const Text = styled.p`
  padding: 2px;
  font-weight: medium;
  font-size: 0.9em;
  color: white;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 25px;

  ${MediaQuery.Tablet} {
    font-size: 1em;
  }
  ${MediaQuery.Desktop} {
    font-size: 1.1em;
    line-height: 30px;
  }
`;
export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.2em;
  color: white;

  width: 7em;
  height: 2em;

  background-color: rgba(30, 60, 300);
  border: none;
  border-radius: 6px;

  position: static;
  cursor: pointer;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.3);

  ${MediaQuery.Tablet} {
    width: 7.2em;
    height: 2.2em;
  }
  ${MediaQuery.Desktop} {
    width: 7.3em;
    height: 2.3em;
  }
`;
