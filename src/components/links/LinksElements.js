import styled from 'styled-components';

export const LinksContainer = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #f8f0e3;
  @media screen and (max-height: 500px) {
    height: 80vh;
  }
`;

export const SocialButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SocialLink = styled.button`
  background: transparent;
  border: none;
  font-size: 5rem;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  margin: 20px;
  /* height: 40px;
  width: 40px; */
  &:hover {
    transition: all 0.2s ease-in-out;

    color: #6bffff;
  }

  @media screen and (max-width: 375px), screen and (max-height: 600px) {
    font-size: 3.5rem;
  }

  @media screen and (max-height: 500px) {
    font-size: 3rem;
  }
`;
