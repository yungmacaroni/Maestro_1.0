import React from "react";
import renderer from "react-test-renderer";
import RatingComponentA from "../components/RatingComponentA";

test("renders correctly", () => {
  const tree = renderer.create(<RatingComponentA />).toJSON();
  expect(tree).toMatchSnapshot();
});
