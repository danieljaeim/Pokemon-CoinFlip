import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokedex
  from "./pokedex";
import pokelist from './pokemonlist' 

it("renders without crashing", function() {
  shallow(<Pokedex pokemon={pokelist} iswinner={true} />);
});

xit("matches snapshot", function() {
  let wrapper = mount(<Pokedex />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});