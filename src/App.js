import { useState } from 'react';
import './App.css';

function App() {

	// const [count, setCount] = useState(() => {
	// 	return 0
	// })

	const [state, setState] = useState({count: 4, theme: 'blue'})
	const count = state.count
	const theme = state.theme

	function decreementCount() {
		// setCount((prevCount) => prevCount - 1)
		setState(prevState => {return {...prevState, count: prevState.count - 1}})
	}
	
	function incrementCount() {
		// setCount((prevCount) => prevCount + 1)
		setState(prevState => {return {...prevState, count: prevState.count + 1}})
	}
	return (
		<div>
			<button onClick={decreementCount}>-</button>
			<span>{count}</span>
			<span>{theme}</span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;
