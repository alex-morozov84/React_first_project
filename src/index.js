import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
	return <h2>Hello, world</h2>
	
}

const Field = () => {
	const holder = "Enter here";
	const styledField = {
		width: '300px'
	}

	return <input type="text" 
				style = {styledField}
				placeholder={holder}
				autoComplete=""
				className="first"
				htmlFor=""/>
}

const Button = () => {
	const text = "Log in"
	const logged = true;
	// const res = () => {
	// 	return "Log in, please"
	// }
	// const p = <p>Log in</p>
	return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
	return (
		<div>
			<Header/>
			<Field/>
			<Button/>
		</div>
	)
}

ReactDOM.render(
<App/>,
  document.getElementById('root')
);
