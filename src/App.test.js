import Enzyme, { shallow } from "enzyme";

import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
	const wrapper = shallow(<App />);
	expect(wrapper).toBeTruthy();
});
