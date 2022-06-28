import styled from "styled-components";

export const Container = styled.main``;
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-family: "Oswald";
  font-size: 2em;
  padding: 10px;
  letter-spacing: 0.2px;
`;
export const Text = styled.p`
  font-family: "Oswald";
  font-weight: lighter;
  font-size: 0.9em;
  text-align: center;
  padding: 5px;
  letter-spacing: 0.2px;
`;

export const Form = styled.form`
  margin-top: 1.5em;
  width: 100%;
  height: 60vh;
  display: grid;
  justify-content: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;

  font-family: "Oswald";
  font-size: 1em;
  padding-left: 5px;
  letter-spacing: 0.2px;
`;
export const Email = styled.input`
  height: 3.5em;
  width: 60vh;
`;
export const Password = styled.input`
  height: 3.5em;
  width: 60vh;
`;
export const Button = styled.button`
  font-family: "Oswald";
  font-size: 1em;
  font-weight: bold;
  color: white;
  height: 3.5em;
  width: 10em;

  margin: 0 auto;
  border: none;
  border-radius: 6px;
  background-color: #5818ac;
  cursor: pointer;
  &:hover{
    transition: ease 0.25s;
    background-color: #6f1ed9;
    color: whitesmoke;
  }
`;
export const Register = styled.a`
  font-family: "Oswald";
  font-weight: bold;
  font-size: 1em;
  color: white;

  width: 8em;
  height: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 6px;
  background-color: #aca218;
  margin: 0 auto;

  &:hover{
    background-color: #d9cc1e;
  }
`
export const Link = styled.a`
  font-family: "Oswald";
  font-size: 1em;
  font-weight: lighter;
  color: #121a80;
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover{
    transition: ease 0.25s;
    text-decoration: underline;
    color: #1b28c3;
  }
`;
