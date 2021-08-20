/* eslint-disable max-len */
import React from 'react';
import {
  AboutContainer,
  AboutHeader,
  AboutBackground,
  AboutMeWrapper,
  AboutMeText,
  AboutMePic,
} from './AboutElements';

export default function about() {
  return (
    <AboutContainer id="about">
      <AboutBackground>
        <AboutHeader>Welcome!</AboutHeader>
        <AboutMeWrapper>
          <AboutMeText>
            I'm Stephen a collaborative, self-starting,
            full-stack software developer with a preference for front-end work.
            I believe web development is creative at its core and enjoy
            utilizing my technical skill and artistic background to build
            practical applications with elegant, clean code. Currently seeking a
            position with a diverse team of developers to grow my skillset and
            collaborate with. I also played in an indie-rock band for a decade,
            toured all over the U.S. and love to talk about professional
            basketball.
          </AboutMeText>
          <AboutMePic src="https://media-exp1.licdn.com/dms/image/C4E03AQEFZLsx54T07A/profile-displayphoto-shrink_800_800/0/1609975176414?e=1634774400&v=beta&t=gn5L3P3DSFHCAZZtm0Xg7n_4iTutLUdbIj49-cQtRZ8"></AboutMePic>
        </AboutMeWrapper>
      </AboutBackground>
    </AboutContainer>
  );
}
