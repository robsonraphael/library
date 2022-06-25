import styled from "styled-components";
import { MediaQuery } from "../../style/global";
import { motion } from "framer-motion";

type NavType = { active: boolean };
type IconType = { active: boolean; size: string };

export const _Header = styled(motion.header)`
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  ${MediaQuery.Desktop} {
    z-index: 5;
  }
`;
export const Wrap = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MediaQuery.Desktop} {
    height: 15vh;
  }
`;
export const Logo = styled.div`
  background: linear-gradient(45deg, #5818ac, #3f18ac);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-size: 1.5em;
  font-weight: bolder;
  font-family: "Oswald";
`;
export const Navigation = styled(motion.nav)<NavType>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  gap: 2rem;

  position: absolute;
  top: 80px;
  z-index: 9999;

  width: 94vw;
  height: 100vw;
  border: 2px solid rgba(54, 21, 65, 0.8);
  border-radius: 5px;
  background-color: #f5f5f5;

  ${MediaQuery.Tablet} {
    height: 70vw;
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
    border: none;
    background: none;
  }
`;
export const Link = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  color: #fff;
  padding: 2px;
  font-family: "Oswald";
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 30%;

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 6px;

  &:focus {
    transition: ease-in 0.15s;
    background-color: rgba(54, 17, 89, 0.7);
  }

  ${MediaQuery.Desktop} {
    font-size: 1em;
    padding: 0;

    color: #000;
    background: none;
    width: fit-content;

    &:hover {
      color: rgba(0, 0, 0, 0.6);
    }
    &:focus {
      background: none;
      color: rgba(54, 17, 89, 0.7);
    }
  }
`;
export const Mobile = styled.button`
  background: none;
  padding: 2px;
  border: none;

  ${MediaQuery.Desktop} {
    display: none;
  }
`;
export const SVG = styled.div<IconType>`
  display: ${(props) => (props.active ? "flex" : "none")};
  font-size: ${(props) => props.size};
  color: rgba(0, 0, 0, 0.9);
`;
