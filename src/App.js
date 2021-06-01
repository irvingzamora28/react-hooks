import { useEffect, useState } from 'react';
import './App.css';

function App() {

	
	console.log("Rendered Start");

	const [state, setState] = useState({count: 4, theme: 'blue'})
	const count = state.count
	const theme = state.theme

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			// Cleanup event listener
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const [items, setItems] = useState([])
	const [resourceType, setResourceType] = useState('posts')

	useEffect(() => {
		console.log("Effect");
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
		.then(response => response.json())
		.then(json => setItems(json))
		return () => {
			console.log(`Cleanup ${resourceType}`);
		}
	}, [resourceType])

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
			<h1>WIndows width</h1>
			<h2 >{windowWidth}</h2 >
			<button onClick={decreementCount}>-</button>
			<span>{count}</span>
			<span>{theme}</span>
			<button onClick={incrementCount}>+</button>

			<div>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('users')}>Users</button>
				<button onClick={() => setResourceType('comments')}>Comments</button>
			</div>
			<h1>{resourceType}</h1>
			{items.map(item => { return <pre>{JSON.stringify(item)}</pre>})}
		</div>
	);
}

export default App;
