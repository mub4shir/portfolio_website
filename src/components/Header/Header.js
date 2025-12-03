import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" aria-label="Go to home" className="brand">
        <DiCssdeck size="2.4rem" />
        <Span>Mubashir</Span>
      </Link>
    </Div1>

    <Div2 as="ul">
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>

    <Div3>
      <SocialIcons
        href="https://github.com/mub4shir"
        aria-label="GitHub"
        target="_blank"
        rel="noopener"
      />
      <SocialIcons
        href="https://www.linkedin.com/in/mubashlr/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener"
      />
      {/* <SocialIcons
        href="https://instagram.com/mubashlr_"
        aria-label="Instagram"
        target="_blank"
        rel="noopener"
      /> */}
    </Div3>
  </Container>
);

export default Header;
