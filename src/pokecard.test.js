import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokecard
  from "./pokecard";

it("renders without crashing", function() {
  shallow(<Pokecard />);
});

xit("matches snapshot", function() {
  let wrapper = mount(<Pokecard />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});