/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import {
  ProjectsBackground,
  ProjectsContainer,
  MyProjectsWrapper,
  ProjectsHeading,
  ProjectLinkContainer,
  ProjectLink,
  ProjectImage,
  ProjectTitle,
  Project,
} from './ProjectsElements';

export default function Projects() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsBackground>
        <MyProjectsWrapper>
          <ProjectsHeading>Some recent projects</ProjectsHeading>

          <ProjectLinkContainer>
            <Project>
              <ProjectLink as="a" href="https://socketjockey.netlify.app/">
                <ProjectImage src="https://avatars.githubusercontent.com/u/85531599?s=400&u=c1c7e1909b509286fb4814ddbc03065d9561d698&v=4"></ProjectImage>
              </ProjectLink>
              <ProjectTitle>Socket Jockey</ProjectTitle>
            </Project>
            <Project>
              <ProjectLink as="a" href="https://github.com/st-ART-up">
                <ProjectImage src="https://avatars.githubusercontent.com/u/82911974?s=200&v=4"></ProjectImage>
              </ProjectLink>
              <ProjectTitle>Pixel Pusher</ProjectTitle>
            </Project>
            <Project>
              <ProjectLink as="a" href="https://better-weather.netlify.app/">
                <ProjectImage src="https://avatars.githubusercontent.com/u/80132770?s=400&u=efa7f982d0d7e76966958627f0184a526d34ac60&v=4"></ProjectImage>
              </ProjectLink>
              <ProjectTitle>Better Weather</ProjectTitle>
            </Project>
            <Project>
              <ProjectLink
                as="a"
                href="https://travel-site-alchemy.github.io/travel-site/"
              >
                <ProjectImage src="https://avatars.githubusercontent.com/u/78381966?s=200&v=4"></ProjectImage>
              </ProjectLink>
              <ProjectTitle>Ventana</ProjectTitle>
            </Project>
          </ProjectLinkContainer>
        </MyProjectsWrapper>
      </ProjectsBackground>
    </ProjectsContainer>
  );
}
