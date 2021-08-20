import React, { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Landing from '../landing/Landing';
import About from '../about/About';
import Projects from '../projects/Projects';
import Links from '../links/Links';

import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const vanish = () => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 4000);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Landing isVisible={isVisible} vanish={vanish} />
      <About />
      <Projects />
      <Links />
      {/* <Resume /> */}
    </>
  );
}
