import React from 'react';
import renderer from 'react-test-renderer';
import RatingComponentQ from '../components/RatingComponentQ';

test('renders correctly', () => {
  const tree = renderer.create(<RatingComponentQ />).toJSON();
  expect(tree).toMatchSnapshot();
});