import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaQuery } from "../../style/global";

export const _Main = styled(motion.section)``;
export const Wrap = styled.div`
  padding: 20px;
`;
export const List = styled.ul`
  display: grid;
  gap: 1.2rem;
  ${MediaQuery.Tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ${MediaQuery.Desktop} {
    justify-content: space-between;
  }
`;
export const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${MediaQuery.Tablet} {
    border: none;
  }
`;
export const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Oswald";
  font-weight: 500;
  text-align: center;
  padding: 5px;
  ${MediaQuery.Tablet} {
    font-size: 1.6em;
  }
`;
export const Text = styled.p`
  font-size: 0.9em;
  font-weight: lighter;
  font-family: "Oswald";
  letter-spacing: 0.3px;
  line-height: 24px;

  ${MediaQuery.Tablet} {
    text-align: flex-start;
    width: 20em;
  }
`;
