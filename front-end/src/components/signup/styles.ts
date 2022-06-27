import styled from "styled-components";

export const Container = styled.main``;
export const Wrap = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.div`
  background: linear-gradient(45deg, #5818ac, #3f18ac);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-size: 1.2em;
  font-weight: bolder;
  font-family: "Oswald";
  letter-spacing: 0.2px;
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
  height: 55vh;
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
export const Name = styled.input`
  height: 3.5em;
  width: 60vh;
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
  margin-top: 5px;
  height: 3.5em;
  width: 10em;

  margin: 0 auto;
  border: none;
  border-radius: 6px;
`;
