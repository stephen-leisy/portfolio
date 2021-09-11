import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarButton,
  SidebarRoute,
} from './SidebarElements';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onCLick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            about me
          </SidebarLink>

          <SidebarLink to="projects" onClick={toggle}>
            recent projects
          </SidebarLink>

          <SidebarLink to="myLinks" onClick={toggle}>
            links
          </SidebarLink>
        </SidebarMenu>
        <SidebarButton>
          <SidebarRoute to="Resume2.pdf" target="_blank">
            my resume
          </SidebarRoute>
        </SidebarButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
