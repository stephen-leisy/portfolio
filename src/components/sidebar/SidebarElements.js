import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #f8f0e3;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;

  cursor: pointer;

  &:hover {
    color: #6bffff;
    transition: 0.2s ease-in-out;
    text-shadow: -0.0925rem -0.0925rem 0 #f72585, 0.0925rem 0.0925rem 0 #ff819e;
  }
`;

export const SidebarButton = styled.div`
  display: felx;
  justify-content: center;
`;

export const SidebarRoute = styled(RouterLink)`
  white-space: nowrap;
  padding: 5px 22px;
  font-family: 'Permanent Marker', cursive;
  color: #d434da;
  text-shadow: -0.0925rem -0.0925rem 0 #6bffff, 0.0925rem 0.0925rem 0 #ff819e;
  background-color: #6bffff;
  border-radius: 15px;
  font-size: 30px;
  outline: none;
  border: #d434da 2px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #6bffff;
    text-shadow: -0.0925rem -0.0925rem 0 #f72585, 0.0925rem 0.0925rem 0 #ff819e;
    background-color: #d434da;
    border: #6bffff 2px solid;
  }
`;
