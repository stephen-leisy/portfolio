import React from 'react';
import {
  TechstackWrapper,
  TechstackHeader,
  MyTechstack,
  HeaderAndListBox,
  HeaderWrapper,
  HiddenList,
  Header,
  Item,
} from './TechstackElements';

export default function Techstack({
  languageListOpen,
  toggleLanguage,
  librariesListOpen,
  toggleLibraries,
  databaseListOpen,
  toggleDatabase,
  toolListOpen,
  toggleTools,
}) {
  return (
    <TechstackWrapper
      // onClick={openStack}
      // listOpen={listOpen}
      languageListOpen={languageListOpen}
      librariesListOpen={librariesListOpen}
      databaseListOpen={databaseListOpen}
      toolListOpen={toolListOpen}
    >
      <HeaderWrapper>
        <TechstackHeader>Tech Stack</TechstackHeader>
      </HeaderWrapper>
      <MyTechstack id="techstack">
        <HeaderAndListBox>
          <Header onClick={toggleLanguage} listOpen={languageListOpen}>
            Languages
          </Header>
          <HiddenList listOpen={languageListOpen}>
            <Item>Javascript</Item>
            <Item>HTML</Item>
            <Item>CSS</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleLibraries} listOpen={librariesListOpen}>
            Libraries & Frameworks
          </Header>
          <HiddenList listOpen={librariesListOpen}>
            <Item>React</Item>
            <Item>Redux</Item>
            <Item>Express.js</Item>
            <Item>Node.js</Item>
            <Item>Styled Components</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleDatabase} listOpen={databaseListOpen}>
            Databases
          </Header>
          <HiddenList listOpen={databaseListOpen}>
            <Item>PostgreSQL</Item>
            <Item>Sequelize</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleTools} listOpen={toolListOpen}>
            Tools
          </Header>
          <HiddenList listOpen={toolListOpen}>
            <Item>GitHub</Item>
            <Item>Heroku</Item>
            <Item>Postman</Item>
            <Item>PG Admin</Item>
            <Item>Postman</Item>
            <Item>Netlify</Item>
            <Item>VS Code</Item>
          </HiddenList>
        </HeaderAndListBox>
      </MyTechstack>
    </TechstackWrapper>
  );
}
