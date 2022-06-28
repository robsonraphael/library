import styled from "styled-components";
import { MediaQuery } from "../../style/global";

interface TypeSocial {
  color: string;
}

export const Container = styled.footer`
  background-color: #181818;
`;
export const Wrap = styled.div`
  height: fit-content;
  padding: 30px;

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
    border-top: 0.5px solid #101010;
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
  font-family: "Oswald";
  font-size: 1.4em;
  font-weight: bolder;
  color: white;

  ${MediaQuery.Desktop} {
    font-size: 1.6em;
  }
`;
export const Title = styled.h3`
  font-family: "Oswald";
  font-size: 1.3em;
  color: white;

  ${MediaQuery.Desktop} {
    font-size: 1.5em;
  }
`;
export const Text = styled.p`
  font-family: "Oswald";
  font-weight: lighter;
  letter-spacing: 0.2px;
  font-size: 0.9em;
  text-align: start;
  color: whitesmoke;
`;
export const Link = styled.a`
  font-family: "Oswald";
  font-weight: medium;
  cursor: pointer;
  font-size: 1em;
  padding: 3px;
  color: #ccc;
`;
export const LinkSocial = styled(Link)<TypeSocial>`
  color: ${(props) => props.color};
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
  font-family: "Oswald";

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
  bottom: 34px;
  left: 90px;
  font-size: 13px;

  background: none;
  border: none;
  cursor: pointer;
  color: #15b;

  ${MediaQuery.Desktop} {
    bottom: 53px;
    left: 200px;
    font-size: 15px;
    background-color: ivory;
    border-radius: 5px;
    padding: 5px;
    color: black;
  }
`;
