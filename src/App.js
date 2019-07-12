import "./App.css";

import React from "react";

class App extends React.Component {
	state = {
		counter: 0,
		showError: false
	}

	handleIncrement = () => {
		const { counter } = this.state
		if (counter < 0) {
			return this.setState({ counter: counter + 1, showError: true })
		}
		this.setState({
			counter: counter + 1,
			showError: false
		})
	}

	handleDecrement = () => {
		const { counter } = this.state
		if (counter <= 0) {
			return this.setState({ showError: true })
		}
		this.setState({
			counter: counter - 1
		})
	}
	render () {
		const { counter, showError } = this.state
		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">The count is {counter}</h1>
				<button data-test="increment-button" onClick={this.handleIncrement}>Increment Counter</button>
				<button data-test="decrement-button" onClick={this.handleDecrement}>Decrement Counter</button>
				{showError && <div data-test="decrement-error" style={{ marginTop: 30, color: "red", fontWeight: "bold" }}>Counter could not be below 0</div>}
			</div >
		)
	}
}

export default App;



