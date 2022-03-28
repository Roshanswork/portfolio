import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { motion } from "framer-motion"

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
    <img style={{ width:"50%", borderRadius:"50%", }} src="images/profile.jpg" />
        <SectionTitle main center>
          Hay there, <br />
          I am Roshan Jambhulkar
        </SectionTitle>
        <SectionText>
       Full-stack web developer <br/>
       <a href='https://github.com/Roshanswork' target="_blank"> <Button>Know More</Button></a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;