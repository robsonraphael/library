import styled from "styled-components";

export const Container = styled.section``;
export const Wrap = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2em;
  padding: 10px;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.text};
`;
export const Text = styled.p`
  font-weight: lighter;
  font-size: 0.9em;
  text-align: center;
  padding: 5px;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.text};
`;

export const Form = styled.form`
  margin-top: 1em;
  width: 100%;
  height: 65vh;
  display: grid;
  justify-content: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;

  font-size: 1em;
  padding-left: 5px;
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.text};
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
  margin-bottom: 1em;
`;
export const Button = styled.button`
  font-weight: bold;
  color: white;
  font-size: 1em;
  height: 3.5em;
  width: 10em;

  margin: 0 auto;
  border: none;
  border-radius: 6px;
  background-color: rgb(20, 50, 200);
  cursor: pointer;
  &:hover {
    transition: ease 0.25s;
    background-color: rgb(20, 20, 200);
    color: whitesmoke;
  }
`;

export const Login = styled.a`
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

  &:hover {
    background-color: #d9cc1e;
  }
`;
