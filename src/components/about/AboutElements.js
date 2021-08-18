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

  @media screen and (max-width: 1068px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }
`;

export const AboutMeText = styled.p`
  width: 40%;

  @media screen and (max-width: 1068px) {
    width: 90%;
    padding-bottom: 10px;
  }
`;

export const AboutMePic = styled.img`
  border-radius: 50%;
  height: 55vmin;
  width: 55vmin;

  @media screen and (max-width: 1068px) {
    margin-top: 30px;
  }
`;

export const AboutHeader = styled.h1`
  padding-top: 90px;
  font-family: 'Permanent Marker', cursive;
  color: #f72585;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
`;
