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
	const wrapper = shallow(<App />);
	const button = wrapper.find("[data-test='increment-button']");
	expect(button.length).toBe(1);
})

it("should renders counter display", () => {
	const wrapper = shallow(<App />);
	const counterDisplay = wrapper.find("[data-test='counter-display']");
	expect(counterDisplay.length).toBe(1);
})

it("renders the counter at 0 initially", () => {

})

it("should increment the counter on button click", () => {

})