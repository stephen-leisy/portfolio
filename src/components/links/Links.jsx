import React from 'react';
import { LinksContainer, SocialButtons, SocialLink } from './LinksElements';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

export default function Links() {
  return (
    <LinksContainer id="myLinks">
      <SocialButtons>
        <SocialLink as="a" href="https://github.com/stephen-leisy">
          <ImGithub />
        </SocialLink>
        <SocialLink as="a" href="https://www.linkedin.com/in/stephen-leisy/">
          <ImLinkedin />
        </SocialLink>
        <SocialLink as="a" href="https://twitter.com/leisys">
          <ImTwitter />
        </SocialLink>
      </SocialButtons>
    </LinksContainer>
  );
}
