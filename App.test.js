import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
jest.useFakeTimers()

describe('<App />', () => {
  it('App has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});