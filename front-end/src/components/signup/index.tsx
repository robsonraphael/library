import { useEffect } from "react";
import { api } from "../../api";
import {
  Container,
  Wrap,
  Title,
  Text,
  Form,
  Label,
  Name,
  Email,
  Password,
  Login,
  Button,
} from "./styles";

export const SignUp = () => {
  const addUser = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    useEffect(() => {
      console.log(api)
      console.log(name)
      api
        .post("/user/register", {
          name,
          email,
          password,
        })
        .then((userStatus) => {
          alert(userStatus);
        })
        .catch((err) => {
          alert(err);
        });
    });
  };
  return (
    <>
      <Container>
        <Wrap>
          <Title>Sign up</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            distinctio fuga.
          </Text>
          <Form>
            <Label>Name</Label>
            <Name name="username" type={"text"} id="name" />
            <Label>Email</Label>
            <Email name="email" type={"email"} id="email" />
            <Label>Password</Label>
            <Password name="password" type={"password"} id="password" />
            <Button
              name="submit"
              type={"submit"}
              id="submit"
              onClick={() => addUser}
            >
              Create account
            </Button>
            <Login href="/login">Login</Login>
          </Form>
        </Wrap>
      </Container>
    </>
  );
};
