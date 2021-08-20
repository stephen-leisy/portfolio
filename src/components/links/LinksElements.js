import styled from 'styled-components';

export const LinksContainer = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #f8f0e3;
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
  font-size: 3.5rem;
  color: #d434da;
  margin: 20px;
  /* height: 40px;
  width: 40px; */
  &:hover {
    transition: all 0.3s ease-in-out;

    color: #6bffff;
  }
`;
