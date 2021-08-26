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
  const [languageListOpen, setLanguageListOpen] = useState(false);
  const [librariesListOpen, setLibrariesListOpen] = useState(false);
  const [databaseListOpen, setDatabaseListOpen] = useState(false);
  const [toolListOpen, setToolListOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguageListOpen(!languageListOpen);
  };

  const toggleLibraries = () => {
    setLibrariesListOpen(!librariesListOpen);
  };

  const toggleDatabase = () => {
    setDatabaseListOpen(!databaseListOpen);
  };

  const toggleTools = () => {
    setToolListOpen(!toolListOpen);
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
      <Techstack
        languageListOpen={languageListOpen}
        toggleLanguage={toggleLanguage}
        librariesListOpen={librariesListOpen}
        toggleLibraries={toggleLibraries}
        databaseListOpen={databaseListOpen}
        toggleDatabase={toggleDatabase}
        toolListOpen={toolListOpen}
        toggleTools={toggleTools}
      />
      <Projects />
      <Links />
      {/* <Resume /> */}
    </>
  );
}
