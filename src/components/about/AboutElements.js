import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 93vh;
  width: 100%;
  background-color: #f8f0e3;
`;

export const AboutBackground = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AboutMeWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  /* border: black 1px solid; */
  padding: 20px 0px;

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const AboutMeText = styled.p`
  width: 40%;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    font-size: 0.8rem;
    width: 80%;
    height: 20%;
    padding-bottom: 10px;
  }
`;

export const AboutMePic = styled.img`
  border-radius: 50%;
  height: 55vmin;
  width: 55vmin;
  border: solid 3px black;
  box-shadow: -0.3625rem -0.2625rem 0 #6bffff, 0.3625rem 0.2625rem 0 #d434da;

  @media screen and (max-width: 1268px) {
    /* margin-top: 30px; */
    height: 35vmin;
    width: 35vmin;
  }
`;

export const AboutHeader = styled.h1`
  padding-top: 90px;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    padding-top: 80px;
  }
`;
