import {
  Container,
  Wrap,
  Title,
  Text,
  Form,
  Label,
  Email,
  Password,
  Button,
  Register,
  Link,
} from "./styles";

export const Loggin = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Title>Welcome</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nam
            consequuntur dolorem dignissimos at nisi in ipsam quidem similique
            adipisci perferendis corporis.
          </Text>
          <Form>
            <Label>Email</Label>
            <Email />
            <Label>Password</Label>
            <Password />
            <Link>Forget password</Link>
            <Button>Login</Button>
            <Register href="/register">Register</Register>
          </Form>
        </Wrap>
      </Container>
    </>
  );
};
