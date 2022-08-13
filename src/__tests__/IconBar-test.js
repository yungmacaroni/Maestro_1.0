import React from 'react';
import renderer from 'react-test-renderer';
import IconBar from '../components/IconBar';

test('renders correctly', () => {
  const tree = renderer.create(<IconBar />).toJSON();
  expect(tree).toMatchSnapshot();
});