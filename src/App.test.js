import Enzyme, { shallow } from "enzyme";

import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for the setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	return shallow(<App {...props} />)
}

/**
 * Returns Shallow rapper containing node(s) with the givin data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of the data-test attribute.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${ val }']`)
}

it("should renders without error", () => {
	const wrapper = setup()
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1);
})
it("should renders increment button", () => {
	const wrapper = setup()
	const button = findByTestAttr(wrapper, "increment-button")
	expect(button.length).toBe(1);
})

it("should renders counter display", () => {
	const wrapper = setup()
	const counterDisplay = findByTestAttr(wrapper, 'counter-display')
	expect(counterDisplay.length).toBe(1);
})

it("renders the counter at 0 initially", () => {
	const wrapper = setup()
	const initialCounterState = wrapper.state('counter')
	expect(initialCounterState).toBe(0)
})

it("should increment the counter on button click", () => {

})