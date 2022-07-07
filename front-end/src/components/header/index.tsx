import { useState } from "react";
import { _Header, Navigation, Link, Wrap, Mobile, Icon, Btn } from "./styles";
import { Logo } from "../logo";

// Icons
import { GoThreeBars, GoX } from "react-icons/go";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

// Animation
const variants = {
  open: { x: ["-200%", "0%"], opacity: 1 },
  closed: { opacity: 0 },
};

export const Header = ({ click, isDark }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <_Header animate={{ y: [-100, 0], opacity: [0, 0.5, 1] }}>
        <Wrap>
          <Logo />
          <Navigation
            active={isOpen}
            animate={isOpen ? "open" : "close"}
            variants={variants}
          >
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="/book">Books</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Btn onClick={click}>
              <Icon active={!isDark}>
                <BsFillMoonFill size="2.2em" />
              </Icon>
              <Icon active={isDark}>
                <BsFillSunFill size="2.2em" />
              </Icon>
            </Btn>
          </Navigation>
          <Mobile onClick={() => setIsOpen(!isOpen)}>
            <Icon active={!isOpen}>
              <GoThreeBars size="2.2em" />
            </Icon>
            <Icon active={isOpen}>
              <GoX size="2.2em" />
            </Icon>
          </Mobile>
        </Wrap>
      </_Header>
    </>
  );
};
