import Enzyme, { shallow } from "enzyme";

import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should renders without error", () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find("[data-test='component-app']");
	expect(appComponent.length).toBe(1);
})
it("should renders increment button", () => {

})

it("should renders counter display", () => {

})

it("renders the counter at 0 initially", () => {

})

it("should increment the counter on button click", () => {

})