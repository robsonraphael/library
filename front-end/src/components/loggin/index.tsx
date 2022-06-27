import {
  Container,
  Wrap,
  Logo,
  Title,
  Text,
  Form,
  Label,
  Email,
  Password,
  Button,
  Link,
} from "./styles";

export const Loggin = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Logo>Library GHOST</Logo>
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
            <Button>Login</Button>
            <Link>Forget password</Link>
          </Form>
        </Wrap>
      </Container>
    </>
  );
};
