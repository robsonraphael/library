import { useState } from "react";
import { _Header, Logo, Navigation, Link, Wrap, Mobile, SVG } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: { x:["-200%", "0%"], opacity: 1},
  closed: { opacity: 0},
};

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <_Header animate={{y: [-100, 0], opacity:[0, 0.5, 1]}}>
        <Wrap>
          <Logo>Library GHOST</Logo>
          <Navigation
            active={isActive}
            animate={isActive ? "open" : "close"}
            variants={variants}
          >
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#book">Books</Link>
            <Link href="#login">Login</Link>
            <Link href="#register">Register</Link>
          </Navigation>
          <Mobile onClick={() => setIsActive(!isActive)}>
            <SVG active={!isActive} size="1.9em">
              <FontAwesomeIcon icon={faBars} />
            </SVG>
            <SVG active={isActive} size="2em">
              <FontAwesomeIcon icon={faClose}/>
            </SVG>
          </Mobile>
        </Wrap>
      </_Header>
    </>
  );
};
