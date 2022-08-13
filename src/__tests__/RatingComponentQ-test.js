import React from "react";
import renderer from "react-test-renderer";
import RatingComponentQ from "../components/RatingComponentQ";
import { shallow } from "enzyme";
import {act, fireEvent, render} from '@testing-library/react'

test("renders correctly", () => {
  const tree = renderer.create(<RatingComponentQ />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("picker changed", () => {
    const {getByLabelText} = render(<RatingComponentQ />)

    const inputText = getByLabelText('Player Name');
    expect(inputText).toBeInDocument();
    // inputText.simulate('change', {target: {value: 'Massimo'}})
    // expect(inputText.get(0).value).to.equal('Massimo')
    // done();
//   const tree = shallow;
});
