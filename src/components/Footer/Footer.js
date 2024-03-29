import React from "react";
import {
  AiFillFile,
  AiFillGithub,
  AiFillGold,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { SectionText, SectionTitle } from "../../styles/GlobalComponents";

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

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <SectionTitle>Contact</SectionTitle>

      <SectionText>Feel free to connect with me</SectionText>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <AiFillPhone size="3rem" />
          <LinkItem href="#">+91 7769873064</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <AiFillMail size="3rem" />
          <LinkItem href="#">jambhulkar.roshan7@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons
            href="https://www.github.com/Roshanswork"
            target="_blank"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/roshan-jambhulkar-0a0861136/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="resume/ROSHAN-JAMBHULKAR-RESUME.pdf"
            download="ROSHAN-JAMBHULKAR-RESUME.pdf"
            target="_blank"
          >
            <AiFillFile size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
