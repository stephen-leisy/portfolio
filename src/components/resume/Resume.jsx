import React from 'react';
import { ResumeWrapper, ResumeImg } from './ResumeElements';

export default function Resume() {
  return (
    <ResumeWrapper>
      <ResumeImg src="Resume1.png"></ResumeImg>
      <a to="Resume2.pdf" target="_blank">
        RESUME
      </a>
    </ResumeWrapper>
  );
}
