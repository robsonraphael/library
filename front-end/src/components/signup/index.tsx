import {
  Container,
  Wrap,
  Logo,
  Title,
  Text,
  Form,
  Label,
  Name,
  Email,
  Password,
  Button,
} from "./styles";

export const SignUp = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Logo />
          <Title>Sign up</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            distinctio fuga.
          </Text>
          <Form>
            <Label>Name</Label>
            <Name />
            <Label>Email</Label>
            <Email />
            <Label>Password</Label>
            <Password />
            <Button>Create account</Button>
          </Form>
        </Wrap>
      </Container>
    </>
  );
};
