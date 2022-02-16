import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { motion } from "framer-motion"

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
       Full-stack web developer
        </SectionText>
       <a href='https://github.com/Roshanswork' target="_blank"> <Button>Know More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;