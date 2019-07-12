import "./App.css";

import React from "react";

class App extends React.Component {
	state = {
		counter: 0
	}
	render () {
		const { counter } = this.state
		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">The count is {counter}</h1>
				<button data-test="increment-button" onClick={() => this.setState({ counter: counter + 1 })}>Increment Counter</button>
			</div>
		)
	}
}

export default App;



