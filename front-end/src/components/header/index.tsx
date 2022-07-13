import { useState } from "react";
import { _Header, Navigation, Link, Wrap, Mobile, Btn } from "./styles";
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
              <BsFillMoonFill
                display={!isDark ? "flex" : "none"}
                size="2.2em"
                color="rgb(100, 100, 100)"
              />
              <BsFillSunFill
                display={isDark ? "flex" : "none"}
                size="2.2em"
                color="rgb(250, 250, 20)"
              />
            </Btn>
          </Navigation>
          <Mobile onClick={() => setIsOpen(!isOpen)}>
            <GoThreeBars display={!isOpen ? "flex" : "none"} size="2.2em"/>
            <GoX display={isOpen ? "flex" : "none"} size="2.2em"/>
          </Mobile>
        </Wrap>
      </_Header>
    </>
  );
};
