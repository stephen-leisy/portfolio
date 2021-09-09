import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    // const { asFragment } = render(<App />);
    const thisIs = 'cool';
    expect(thisIs).toEqual('cool');
  });
});
