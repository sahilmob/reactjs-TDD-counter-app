import "./App.css";

import React, { useState } from "react";

function App () {
	let [counter, setCounter] = useState(0)
	return (
		<div className="App" data-test="component-app">
			<h1 data-test="counter-display">The count is {counter}</h1>
			<button data-test="increment-button" onClick={() => setCounter(++counter)}>Increment Counter</button>
		</div>
	);
}

export default App;
