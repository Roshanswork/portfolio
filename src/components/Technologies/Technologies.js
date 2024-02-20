import React from "react";
import {
  DiAndroid,
  DiCss3Full,
  DiFirebase,
  DiGitBranch,
  DiGithub,
  DiHtml5,
  DiIonic,
  DiJavascript,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
  DiZend,
} from "react-icons/di";
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
          <ListParagraph>
            {" "}
            <picture>
              <DiHtml5 size="1.5rem" />
            </picture>{" "}
            HTML
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiCss3Full size="1.5rem" />
            </picture>{" "}
            CSS
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiJavascript1 size="1.5rem" />
            </picture>{" "}
            JavaScript
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiNodejsSmall size="1.5rem" />
            </picture>{" "}
            Node.js
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiReact size="1.5rem" />
            </picture>{" "}
            React.js
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiReact size="1.5rem" />
            </picture>{" "}
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {" "}
            <picture>
              <DiMongodb size="1.5rem" />
            </picture>{" "}
            MongoDB
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiMongodb size="1.5rem" />
            </picture>{" "}
            Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            {" "}
            <picture>
              <DiAndroid size="1.5rem" />
            </picture>{" "}
            Android Studio
          </ListParagraph>
          <ListParagraph>
            {" "}
            <picture>
              <DiGitBranch size="1.5rem" />
            </picture>{" "}
            GitHub
          </ListParagraph>
          <ListParagraph>XCode</ListParagraph>

          <ListParagraph>Postman</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
