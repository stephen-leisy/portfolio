import styled from 'styled-components';

export const TechstackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: ${({ listOpen }) => (listOpen ? '20vh' : '5vh')};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TechstackHeader = styled.h2`
  color: #d434da;
  font-size: 2rem;
  font-family: 'Permanent Marker', cursive;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  -webkit-text-stroke: 0.25px black;

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    font-size: 1rem;
  }
`;

export const MyTechstack = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-start;
`;

export const HeaderAndListBox = styled.div`
  margin: 0 10px;
`;

export const Header = styled.h2`
  cursor: pointer;
  color: ${({ listOpen }) => (listOpen ? '#ff819e' : '#d434da')};
  font-family: 'Permanent Marker', cursive;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    font-size: 0.6rem;
  }
`;

export const HiddenList = styled.ul`
  visibility: ${({ listOpen }) => (listOpen ? 'visible' : 'hidden')};
`;

export const Item = styled.li`
  list-style-type: none;
  font-family: 'Lato', sans-serif;

  @media screen and (max-width: 1268px), screen and (max-height: 800px) {
    font-size: 0.6rem;
  }
`;
