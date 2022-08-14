import React from "react";
import renderer from "react-test-renderer";
import IconBar from "../components/IconBar";
import LogoTitle from "../components/LogoTitle";
import RatingComponentQ from "../components/RatingComponentQ";
import RatingComponentA from "../components/RatingComponentA";

test("renders correctly", () => {
  const tree = renderer.create(<IconBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const tree = renderer.create(<LogoTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const tree = renderer.create(<RatingComponentQ />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const tree = renderer.create(<RatingComponentA />).toJSON();
  expect(tree).toMatchSnapshot();
});
