import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 93vh;
  width: 100vw;
  background-color: #f8f0e3;
`;

export const ProjectsBackground = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MyProjectsWrapper = styled.div`
  margin-top: 80px;
  width: 80vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 3px #d434da;
  border-radius: 15px;
`;

export const ProjectsHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
`;

export const ProjectLinkContainer = styled.main`
  height: 70vh;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  /* margin: 30px; */

  @media screen and (max-width: 1268px) {
    width: 100%;
  }
`;

export const ProjectLink = styled.button``;

export const ProjectImage = styled.img`
  height: 30vmin;
  width: 30vmin;

  border: black 3px solid;
  border-radius: 30px;
  box-shadow: -0.3625rem -0.2625rem 0 #6bffff, 0.3625rem 0.2625rem 0 #d434da;
  &:hover {
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1268px) {
    width: 15vmin;
    height: 15vmin;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  padding-top: 10px;
  @media screen and (max-width: 1268px) {
    width: 15vmin;
    height: 15vmin;
  }
`;

export const ProjectDescription = styled.p`
  width: 100%;
  font-family: 'Lato', sans-serif;
  @media screen and (max-width: 1268px) {
    width: 15vmin;
    height: 15vmin;
  }
`;

export const Project = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
