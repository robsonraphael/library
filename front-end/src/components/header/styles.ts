import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaQuery } from "../../style/mediaQuery";

// Header
export const _Header = styled(motion.header)`
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  ${MediaQuery.Desktop} {
    position: static;
  }
`;
export const Wrap = styled.div`
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MediaQuery.Desktop} {
    height: 15vh;
  }
`;
export const Navigation = styled(motion.nav)<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  gap: 1em;

  position: absolute;
  top: 69px;
  left: 0px;
  overflow-x: hidden;

  width: 98vw;
  height: 90vh;

  background-color: ${(props) => props.theme.colors.nav};

  ${MediaQuery.Tablet} {
    width: 99vw;
  }
  ${MediaQuery.Desktop} {
    padding: 0;
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2.3rem;

    width: fit-content;
    height: fit-content;
    background: none;
  }
`;
export const Link = styled.a`
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.text};
  padding: 2px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 4em;

  background-color: rgba(120, 120, 120);
  border-radius: 4px;

  &:focus {
    background-color: rgba(40, 30, 240);
  }

  ${MediaQuery.Desktop} {
    font-size: 1em;
    padding: 0;

    background: none;
    width: fit-content;
    transition: ease-in 0.2s;

    &:hover {
      color: rgba(50, 60, 200);
    }
    &:focus {
      background: none;
      color: rgba(20, 30, 200);
    }
  }
`;
export const Mobile = styled.button`
  background: none;
  padding: 2px;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};

  ${MediaQuery.Desktop} {
    display: none;
  }
`;
export const Btn = styled(Mobile)<{ hover?: string }>`
  ${MediaQuery.Desktop} {
    display: flex;
  }

`;
