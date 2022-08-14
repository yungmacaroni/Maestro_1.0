import React from "react";
import renderer from "react-test-renderer";
import { AdvancedGenerator } from "../modules/AdvancedGenerator";

jest.setTimeout(15000);

test("renders correctly", () => {
  jest.mock("../components/RatingComponentA", () => "Rating");
  const tree = renderer.create(<AdvancedGenerator />).toJSON();
  expect(tree).toMatchSnapshot();
});
