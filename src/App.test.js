import React from 'react';
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from './App';

it('renders without crashing', () => {
  shallow(<App/>);
});

// snapshot test
xit("matches snapshot", function() {
  let wrapper = mount(<App />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});