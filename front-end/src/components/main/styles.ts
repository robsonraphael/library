import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaQuery } from "../../style/mediaQuery";

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
  border-bottom: 1px solid ${MediaQuery.Tablet} {
    border: none;
  }
`;
export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  padding: 5px;
  ${MediaQuery.Tablet} {
    font-size: 1.6em;
  }
`;
export const Text = styled.p`
  font-size: 0.9em;
  font-weight: lighter;
  letter-spacing: 0.3px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.text};

  ${MediaQuery.Tablet} {
    text-align: flex-start;
    width: 20em;
  }
`;
