import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { motion } from "framer-motion";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <img
          style={{ width: "50%", borderRadius: "50%" }}
          src="images/profile.jpg"
        />
        <SectionTitle main center>
          Hey there, <br />I am Roshan Jambhulkar
        </SectionTitle>
        <SectionText>
          Front-end developer
          <br />
          <SectionText>
            An energetic and clear-headed front-end developer with a
            specialization in the React and React Native. Curious to learn new
            things with a keen interest to work in a fast-paced company that can
            contribute to his personal growth.
          </SectionText>
          <a href="https://github.com/Roshanswork" target="_blank">
            {" "}
            <Button>Know More</Button>
          </a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
