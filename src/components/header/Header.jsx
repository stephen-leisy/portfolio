import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ResumeButton,
  ResumeLink,
} from './HeaderElements';

export default function Header({ toggle }) {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" onClick={refreshPage}>
            Stephen Leisy
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">about me</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="projects">recent projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="myLinks">links</NavLinks>
            </NavItem>
          </NavMenu>
          <ResumeButton>
            <ResumeLink to="/resume">my resume</ResumeLink>
          </ResumeButton>
        </NavBarContainer>
      </Nav>
    </>
    // <header>
    //   <button value={'about'} onClick={handleHeaderLink}>
    //     about me
    //   </button>
    //   <button value={'projects'} onClick={handleHeaderLink}>
    //     my recent projects
    //   </button>
    //   <button value={'links'} onClick={handleHeaderLink}>
    //     important links
    //   </button>
    //   <button value={'resume'} onClick={handleHeaderLink}>
    //     resume
    //   </button>
    // </header>
  );
}
//
