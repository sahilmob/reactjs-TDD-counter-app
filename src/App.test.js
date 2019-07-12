import Enzyme, { shallow } from "enzyme";

import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for the setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />)
	if (state) wrapper.setState(state)
	return wrapper
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
	const counter = 7
	const wrapper = setup(null, { counter })
	const button = findByTestAttr(wrapper, "increment-button")
	button.simulate('click')
	// wrapper.update()

	const counterDisplay = findByTestAttr(wrapper, 'counter-display')

	expect(counterDisplay.text()).toContain(counter + 1)
})

it("should decrement the counter on button click", () => {
	const counter = 5
	const wrapper = setup(null, { counter })
	const button = findByTestAttr(wrapper, "decrement-button")
	button.simulate("click")
	wrapper.update()
	const counterDisplay = findByTestAttr(wrapper, "counter-display")
	expect(counterDisplay.text()).toContain(counter - 1)
})

it("should not decrement the counter below 0", () => {
	const counter = 0;
	const wrapper = setup(null, { counter })
	const button = findByTestAttr(wrapper, "decrement-button")
	const counterDisplay = findByTestAttr(wrapper, "counter-display")
	const errorMsg = findByTestAttr(wrapper, "decrement-error")
	button.simulate("click")
	wrapper.update()
	expect(wrapper.state().counter).toEqual(0);
	expect(counterDisplay.text()).toContain(0)
	expect(errorMsg).toExist

})