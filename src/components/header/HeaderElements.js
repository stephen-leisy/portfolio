import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

export const Nav = styled.nav`
  background: rgba(248, 240, 227, 0.7);
  height: 7vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3 rem;
  position: fixed;

  top: 0;
  z-index: 10;
  overflow-x: hidden;
  border-bottom: #d434da 6px solid;

  /* border-bottom: #f72585 2px solid; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-height: 700px) {
    height: 60px;
  }
`;

export const NavBarContainer = styled.div`
  background: rgba(248, 240, 227, 0.8);
  height: inherit;
  display: flex;
  justify-content: space-between;
  height: 80px;

  z-index: 1;
  width: 100vw;
  padding: 0 60px;
  border-bottom: #d434da 6px solid;

  /* max-width: 1400px; */

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavLogo = styled(RouterLink)`
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  background: transparent;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  justify-self: flex-start;
  /* cursor: pointer; */
  font-size: 4vmin;
  display: flex;
  align-items: center;
  /* padding-right: 50px; */
  font-weight: bold;
  text-decoration: none;
  overflow-x: visible;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
    color: #d434da;
    -webkit-text-stroke: 0.25px black;
    background: transparent;
  }
`;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  padding-right: 90px;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  background: transparent;
`;

export const NavLinks = styled(ScrollLink)`
  font-family: 'Permanent Marker', cursive;
  background: transparent;
  color: #d434da;
  text-shadow: -0.0625rem -0.0925rem 0 #6bffff, 0.0625rem 0.0625rem 0 #ff819e;
  -webkit-text-stroke: 0.25px black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  padding: 0 1rem;
  margin-left: 20px;
  height: 100%;
  font-size: 1.3rem;
  /* border-bottom: #f72585 2px solid; */

  cursor: pointer;

  &.active {
    border-bottom: 3px solid #f72585;
  }
  &:hover {
    transition: all 0.2s ease-in-out;

    color: #6bffff;
    -webkit-text-stroke: 0.25px black;
    text-shadow: -0.0925rem -0.0925rem 0 #f72585, 0.0925rem 0.0925rem 0 #ff819e;
    text-decoration: underline;
  }

  /* @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
    padding-left: 20px;
  } */
`;

export const ResumeButton = styled.nav`
  display: flex;
  align-items: center;
  border: none;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ResumeLink = styled(RouterLink)`
  /* border-radius: 50px; */
  /* background: #ff819e; */
  white-space: nowrap;
  padding: 10px 22px;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  -webkit-text-stroke: 0.25px black;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;

  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #6bffff;
    -webkit-text-stroke: 0.25px black;
    text-shadow: -0.0925rem -0.0925rem 0 #f72585, 0.0925rem 0.0925rem 0 #ff819e;
  }

  /* @media screen and (max-width: 1000px) {
    font-size: 25px;
  } */
`;

// old pink color #f72585
