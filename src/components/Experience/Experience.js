import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ExperienceStyle.js";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <HeaderThree>Thinksys Inc, Noida, Up (April 2022 to Present)</HeaderThree>
    <SectionText>
      ThinkSys is a leading software company that specializes in cloud
      computing, DevOps, AI, and QA.
    </SectionText>
  </Section>
);

export default Experience;
