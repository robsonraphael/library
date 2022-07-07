import styled from "styled-components";
import { MediaQuery } from "../../style/mediaQuery";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.foot};
`;
export const Wrap = styled.div`
  height: fit-content;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${MediaQuery.Desktop} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  padding: 5px;

  &:nth-child(n + 2) {
    border-top: 0.5px solid;
    border-radius: 1px;
  }

  ${MediaQuery.Desktop} {
    align-items: flex-start;
    max-width: 300px;
    border: none;
    gap: 1em;

    &:nth-child(n + 2) {
      border: none;
    }
  }
`;
export const Logo = styled.h3`
  font-size: 1.4em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.background};

  ${MediaQuery.Desktop} {
    font-size: 1.6em;
  }
`;
export const Title = styled.h3`
  font-size: 1.3em;
  color: ${(props) => props.theme.colors.background};
  ${MediaQuery.Desktop} {
    font-size: 1.5em;
  }
`;
export const Text = styled.p`
  font-weight: lighter;
  letter-spacing: 0.2px;
  font-size: 0.9em;
  text-align: start;
  color: ${(props) => props.theme.colors.background};
`;
export const Link = styled.a`
  font-weight: medium;
  cursor: pointer;
  font-size: 1em;
  padding: 3px;
  color: ${(props) => props.theme.colors.nav};
`;
export const LinkSocial = styled.a<{ color: string }>`
  color: ${(props) => props.color};
  cursor: pointer;
  padding: 3px;
  font-size: 1.5em;

  ${MediaQuery.Desktop} {
    font-size: 1.6em;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;

  ${MediaQuery.Desktop} {
    width: 60%;
  }
`;
export const Email = styled.input`
  width: 230px;
  height: 35px;
  border: none;
  border-radius: 3px;
  padding: 4px;
  outline: none;
  font-size: 0.8em;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.nav};

  &::placeholder {
    color: ${(props) => props.theme.colors.background};
  }

  ${MediaQuery.Desktop} {
    width: 260px;
    height: 45px;

    &::placeholder {
      font-size: 1.2em;
    }
  }
`;
export const Button = styled.button`
  position: relative;
  font-size: 13px;

  background: none;
  border: none;
  cursor: pointer;
  color: rgb(30, 50, 300);

  ${MediaQuery.Desktop} {
    bottom: 53px;
    left: 200px;
    font-size: 15px;
    padding: 5px;
  }
`;
