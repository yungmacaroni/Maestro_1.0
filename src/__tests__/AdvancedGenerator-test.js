import React from "react";
import renderer from "react-test-renderer";
import AdvancedGenerator from '../modules/AdvancedGenerator'

test("renders correctly", () => {
  const tree = renderer.create(<AdvancedGenerator />).toJSON();
  expect(tree).toMatchSnapshot();
});
