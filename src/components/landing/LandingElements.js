import styled from 'styled-components';

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f8f0e3;
  top: 0;
  left: 0;
  transition: 0.9s ease-in-out;
  position: fixed;

  opacity: ${({ isVisible }) => (isVisible ? '100%' : '0')};
  top: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
`;

export const LandingBackground = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  padding-bottom: 40px;
  /* padding-left: 150px; */
`;

export const LandingText = styled.h1`
  font-family: 'Permanent Marker', cursive;
  color: #f72585;
  text-shadow: -0.1925rem -0.1925rem 0 #6bffff, 0.1925rem 0.1925rem 0 #ff819e;
  font-size: 12vmin;
  margin-left: 60px;

  @media screen and (max-width: 868px) {
    font-size: 8.5vmin;
    margin-left: 20px;
  }

  animation: fadeIn ease 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const DelayText = styled.h3`
  font-family: 'Permanent Marker', cursive;
  color: #f72585;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  font-size: 12vmin;
  margin-left: 60px;

  @media screen and (max-width: 868px) {
    font-size: 8.5vmin;
    margin-left: 20px;
  }

  @media screen and (max-height: 668px) {
    font-size: 8.5vmin;
  }

  animation: delayFadeIn ease 5s;

  @keyframes delayFadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
