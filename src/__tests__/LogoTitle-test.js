import React from 'react';
import renderer from 'react-test-renderer';
import LogoTitle from '../components/LogoTitle'

test('renders correctly', () => {
  const tree = renderer.create(<LogoTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});