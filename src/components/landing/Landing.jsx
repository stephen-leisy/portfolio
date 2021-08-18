import React, { useEffect } from 'react';
import {
  LandingContainer,
  LandingBackground,
  LandingText,
  DelayText,
} from './LandingElements';

export default function Landing({ isVisible, vanish }) {
  useEffect(() => {
    vanish();
  }, []);

  return (
    <LandingContainer id="landing" isVisible={isVisible}>
      <LandingBackground>
        <LandingText>Hi there! I'm Stephen.</LandingText>
        <DelayText>
          A full-stack javascript developer living in Portland, Oregon.
        </DelayText>
      </LandingBackground>
    </LandingContainer>
  );
}
