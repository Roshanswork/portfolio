import Link from "next/link";
import React from "react";
import {
  AiFillFile,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck, DiRuby, DiRubyRough } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiRubyRough size="3rem" /> <span>Roshan Jambhulkar</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.github.com/Roshanswork" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/roshan-jambhulkar-0a0861136/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://drive.google.com/file/d/17CvR9GP8s01He-QZmaOVsC0AQQaGRleW/view?usp=sharing"
        target="_blank"
      >
        <AiFillFile size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
  //complete
);

export default Header;
