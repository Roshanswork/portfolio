import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
    <img style={{height:'35%', width:"35%", borderRadius:"50%", }} src="images/profile.jpeg" />
        <SectionTitle main center>
          Hay there, <br />
          I am Roshan Jambhulkar
        </SectionTitle>
        <SectionText>
        An energetic and clear-headed full-stack web
developer with a specialization in the MERN stack.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;