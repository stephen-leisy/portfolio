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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProjectsHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Permanent Marker', cursive;
  color: #f72585;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
`;

export const ProjectLinkContainer = styled.main`
  height: 70vh;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px;

  @media screen and (max-width: 1268px) {
    width: 100%;
  }
`;

export const ProjectLink = styled.button`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled.img`
  height: 30vmin;
  width: 30vmin;

  border: #f72585 1px solid;
  border-radius: 0px 15px;
`;
