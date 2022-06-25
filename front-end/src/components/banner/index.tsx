import { Container, Wrap, Title, Text, Button } from "./styles";

export const Banner = () => {
  return (
    <>
      <Container animate={{opacity: [0, 0.7 , 1]}}>
        <Wrap>
          <Title>Your Favorite Bookstore</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            doloremque atque iure saepe voluptatum, vero odio suscipit? Itaque
            illum repellendus ratione mollitia impedit at enim nostrum
            reiciendis, eligendi quos aliquam?
          </Text>
          <Button>More Info</Button>
        </Wrap>
      </Container>
    </>
  );
};
