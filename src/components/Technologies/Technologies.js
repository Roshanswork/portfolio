import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>HTML</ListParagraph>
          <ListParagraph>CSS</ListParagraph>
          <ListParagraph>JavaScript</ListParagraph>
          <ListParagraph>Node.js</ListParagraph>
          <ListParagraph>React.js</ListParagraph>
          <ListParagraph>React Native</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>MongoDB</ListParagraph>
          Express
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Android Studio</ListParagraph>
          <ListParagraph>XCode</ListParagraph>
          <ListParagraph>Postman</ListParagraph>
          <ListParagraph>GitHub</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
