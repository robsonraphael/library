import {
  Container,
  Wrap,
  SocialMedia,
  List,
  Item,
  Title,
  Text,
  Logo,
  Link,
  LinkSocial,
  Email,
  Button,
} from "./styles";

import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";

export const Footer = () => {
  return (
    <>
      <Container>
        <Wrap>
          <List>
            <Item>
              <Logo>Library GHOST</Logo>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                doloremque recusandae provident quas consequuntur error
                deserunt, animi laboriosam dolore ipsum assumenda laborum
                voluptates reiciendis.
              </Text>
              <SocialMedia>
                <LinkSocial href="#facebook" color="royalblue">
                  <GrFacebook />
                </LinkSocial>
                <LinkSocial href="#instagram" color="#7f1734">
                  <GrInstagram />
                </LinkSocial>
                <LinkSocial href="#Linkedin" color="#0072b1">
                  <GrLinkedin />
                </LinkSocial>
                <LinkSocial href="#Twitter" color="#436b95">
                  <GrTwitter />
                </LinkSocial>
              </SocialMedia>
            </Item>
            <Item>
              <Title>Useful Links</Title>
              <Link href="#Blog">Blog</Link>
              <Link href="#Contact">Contact</Link>
              <Link href="/">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#terms">Terms & conditions</Link>
            </Item>
            <Item>
              <Title>Contact Us</Title>
              <Text>Adress: Lorem Vurt R:245</Text>
              <Text>Phone: +99 909 0000 123</Text>
              <Text>Email: LibraryGHOST@email.com</Text>
            </Item>
            <Item>
              <Title>Subscribe Us!</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, molestias sed quaerat consectetur.
              </Text>
              <Email placeholder="Enter your email" type={Email} />
              <Button>Submit</Button>
            </Item>
          </List>
        </Wrap>
      </Container>
    </>
  );
};
