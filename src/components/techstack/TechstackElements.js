import styled from 'styled-components';

export const TechstackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: transparent;
  overflow-x: visible;

  height: ${({
    languageListOpen,
    librariesListOpen,
    databaseListOpen,
    toolListOpen,
  }) =>
    languageListOpen || librariesListOpen || databaseListOpen || toolListOpen
      ? '45vh'
      : '25vh'};

  @media screen and (min-width: 345px), screen and (max-height: 660px) {
    padding-top: 40px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  overflow-x: visible;
`;

export const TechstackHeader = styled.h2`
  color: #d434da;
  font-size: 3rem;
  font-family: 'Permanent Marker', cursive;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  -webkit-text-stroke: 0.25px black;
  background: transparent;
  overflow-x: visible;

  @media screen and (max-width: 752px), screen and (max-height: 660px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px), screen and (max-height: 660px) {
    font-size: 1rem;
  }
`;

export const MyTechstack = styled.div`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  overflow-x: visible;
`;

export const HeaderAndListBox = styled.div`
  margin: 0 10px;
  background: transparent;
  overflow-x: visible;
`;

export const Header = styled.h2`
  cursor: pointer;
  font-size: ${({ listOpen }) => (listOpen ? '1.8rem' : '1.6rem')};
  color: ${({ listOpen }) => (listOpen ? '#ff819e' : '#d434da')};
  font-family: 'Permanent Marker', cursive;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;

  background: transparent;

  &:hover {
    text-decoration: underline;
    -webkit-text-stroke: 0.25px black;
  }

  @media screen and (max-width: 752px), screen and (max-height: 660px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 500px), screen and (max-height: 660px) {
    font-size: 0.8rem;
  }
`;

export const HiddenList = styled.ul`
  visibility: ${({ listOpen }) => (listOpen ? 'visible' : 'hidden')};
  background: transparent;
`;

export const Item = styled.li`
  list-style-type: none;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  color: #d434da;
  -webkit-text-stroke: 1.25px black;
  background: transparent;
  overflow-x: visible;

  @media screen and (max-width: 752px), screen and (max-height: 660px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 500px), screen and (max-height: 660px) {
    font-size: 0.8rem;
  }
`;
