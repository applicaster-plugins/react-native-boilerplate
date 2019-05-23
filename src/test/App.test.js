import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders app', () => {
    const TextInputComponent = create(<App />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
  });
});
