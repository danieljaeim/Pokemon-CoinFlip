import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Pokegame
  from "./pokegame";

it("renders without crashing", function() {
  shallow(<Pokegame />);
});