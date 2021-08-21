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

export default function Techstack({ listOpen, toggleList }) {
  return (
    <TechstackWrapper listOpen={listOpen}>
      <HeaderWrapper>
        <TechstackHeader>Tech Stack</TechstackHeader>
      </HeaderWrapper>
      <MyTechstack>
        <HeaderAndListBox>
          <Header onClick={toggleList} listOpen={listOpen}>
            Languages
          </Header>
          <HiddenList listOpen={listOpen}>
            <Item>Javascript</Item>
            <Item>HTML</Item>
            <Item>CSS</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleList} listOpen={listOpen}>
            Libraries & Frameworks
          </Header>
          <HiddenList listOpen={listOpen}>
            <Item>React</Item>
            <Item>Redux</Item>
            <Item>Express.js</Item>
            <Item>Node.js</Item>
            <Item>Styled Components</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleList} listOpen={listOpen}>
            Databases
          </Header>
          <HiddenList listOpen={listOpen}>
            <Item>PostgreSQL</Item>
            <Item>Sequelize</Item>
          </HiddenList>
        </HeaderAndListBox>
        <HeaderAndListBox>
          <Header onClick={toggleList} listOpen={listOpen}>
            Tools
          </Header>
          <HiddenList listOpen={listOpen}>
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
