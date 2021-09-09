import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 93vh;
  width: 100vw;
  background-color: #f8f0e3;
`;

export const ProjectsBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 345px), screen and (max-height: 600px) {
    padding-top: 15px;
  }
`;

export const MyProjectsWrapper = styled.div`
  margin-top: 80px;
  width: 90vw;
  background-color: #fffaf1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 3px #d434da;
  border-radius: 15px;
  /* background: gray; */
`;

export const ProjectsHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  -webkit-text-stroke: 0.25px black;
  background: transparent;

  @media screen and (max-width: 905px), screen and (max-height: 600px) {
    font-size: 1.2rem;
  }
`;

export const ProjectLinkContainer = styled.main`
  height: 80vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
  /* margin: 30px; */

  /* @media screen and (max-width: 905px), screen and (max-height: 600px) {
    width: 50vh;
  } */

  @media screen and (max-width: 345px), screen and (max-height: 600px) {
    width: 70vh;
  }
`;

export const ProjectLink = styled.button`
  background: transparent;
`;

export const ProjectImage = styled.img`
  height: 30vh;
  width: 30vh;

  border: black 3px solid;
  border-radius: 30px;
  box-shadow: -0.3625rem -0.2625rem 0 #6bffff, 0.3625rem 0.2625rem 0 #d434da;
  background: transparent;

  &:hover {
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px), screen and (max-height: 600px) {
    width: 25vh;
    height: 25vh;
    padding: 0 0;
    margin: 0 0;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  padding-top: 10px;
  background: transparent;
  @media screen and (max-width: 905px), screen and (max-height: 600px) {
    /* width: 10vmin;
    height: 15vmin; */
    /* display: none; */
    font-size: 1rem;
  }
`;

export const Project = styled.div`
  margin: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;

  @media screen and (max-width: 1580px), screen and (max-height: 600px) {
    margin: 0 20px;
  }
`;
