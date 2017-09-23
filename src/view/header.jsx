import React from 'react';
import ReactDOM from 'react-dom';

function Title (_props) {
	var liStyle = {
		cursor: (_props.isSelected === 'true') ? 'default' : 'pointer'
	};
	return (
		<li style = {liStyle}>
			All
		</li>
	);
}

function Header (_props) {
	return (
		<div>
			<h2>Simple Todo List</h2>
			<h4>Click on a todo to remove it</h4>
		</div>
	);
}

export default Header;