import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => (
  <FooterWrapper as="footer">
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+917006101958" aria-label="Call Mubashir">
          +91 70061 01958
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem
          href="mailto:mubashir11131719@gmail.com"
          aria-label="Email Mubashir"
        >
          mubashir11131719@gmail.com
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Location</LinkTitle>
        <Slogan as="span">India • Remote-friendly</Slogan>
      </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Minimal code. Reliable systems. Measurable impact.</Slogan>
      </CompanyContainer>

      <SocialContainer>
        <SocialIcons
          href="https://github.com/mub4shir"
          aria-label="GitHub"
          target="_blank"
          rel="noopener"
        >
          <AiFillGithub size="1.6rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/mubashlr/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <AiFillLinkedin size="1.6rem" />
        </SocialIcons>
        {/* <SocialIcons
          href="https://instagram.com/mubashlr_"
          aria-label="Instagram"
          target="_blank"
          rel="noopener"
        >
          <AiFillInstagram size="1.6rem" />
        </SocialIcons> */}
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);

export default Footer;
