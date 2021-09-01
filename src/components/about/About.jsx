/* eslint-disable max-len */
import React from 'react';
import {
  AboutContainer,
  AboutHeader,
  AboutBackground,
  AboutMeWrapper,
  AboutMeText,
  AboutMePic,
  MobileHeader,
} from './AboutElements';

export default function about() {
  return (
    <AboutContainer id="about">
      <AboutBackground>
        <AboutMeWrapper>
          <AboutMeText>
            <AboutHeader>
              Welcome to my tiny corner of the internet!
            </AboutHeader>
            <MobileHeader>Welcome!</MobileHeader>
            <br></br>I love building functional and visually-appealing websites,
            with clean, well-written (dare I say elegant?) code. I'm full-stack
            trained, and though I get a healthy thrill from writing CRUD routes,
            front-end work in React is truly my first love. Compartmentalizing
            and organizing code through React hooks and function components is
            very satisfying to me and I love learning and exploring the many
            things React has to offer. I tried my hand using styled components
            for the first time building this portfolio site and it blew my mind.
            Everything is so semantic and easy to read and part of me doesn't
            want to go back. <br></br>
            <br></br> I spent my twenties touring and playing in various indie
            rock bands, I enjoy collecting and nerding out about vinyl records,
            and love to talk professional basketball.
          </AboutMeText>
          <AboutMePic src="https://media-exp1.licdn.com/dms/image/C4E03AQEFZLsx54T07A/profile-displayphoto-shrink_800_800/0/1609975176414?e=1634774400&v=beta&t=gn5L3P3DSFHCAZZtm0Xg7n_4iTutLUdbIj49-cQtRZ8"></AboutMePic>
        </AboutMeWrapper>
      </AboutBackground>
    </AboutContainer>
  );
}
