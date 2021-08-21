import React, { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Landing from '../landing/Landing';
import About from '../about/About';
import Projects from '../projects/Projects';
import Links from '../links/Links';
import Techstack from '../techstack/Techstack';

import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [listOpen, setListOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleList = () => {
    setListOpen(!listOpen);
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
      <Techstack listOpen={listOpen} toggleList={toggleList} />
      <Projects />
      <Links />
      {/* <Resume /> */}
    </>
  );
}
