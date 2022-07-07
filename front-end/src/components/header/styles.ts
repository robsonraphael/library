import styled from "styled-components";
import { motion } from "framer-motion";
import { MediaQuery } from "../../style/mediaQuery";

// Header
export const _Header = styled(motion.header)`
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0.1em;
  border-bottom-right-radius: 0.1em;
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
  gap: 2rem;

  position: absolute;
  top: 80px;

  width: 94vw;
  height: 100vw;

  border: 2px solid rgba(200, 200, 200);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.nav};

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
  color: ${(props) => props.theme.colors.text};
  padding: 2px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 30%;

  background-color: rgba(120, 120, 120);
  border-radius: 4px;

  &:focus {
    transition: ease-in 0.15s;
    background-color: rgba(50, 50, 300);
  }

  ${MediaQuery.Desktop} {
    font-size: 1em;
    padding: 0;

    background: none;
    width: fit-content;

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

  ${MediaQuery.Desktop} {
    display: none;
  }
`;
export const Btn = styled(Mobile)`
  ${MediaQuery.Desktop}{
    display: flex;
  }
`

export const Icon = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  color: ${props => props.theme.colors.text};
`;
