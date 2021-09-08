import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I'm an SDE
      </SectionTitle>
      <SectionText>
        My goal is to contribute to open-source platforms, develop further
        skills.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.instagram.com/21mubashir/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
