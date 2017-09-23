import React from 'react';
import ReactDOM from 'react-dom';

function TodoList (_props) {

	const onTodoClick = function (_id) {
		console.log("clicked + " + _id);
		_props.onTodoClick(_id);
	};

	return (
		<div className = 'todoList'>
			<ul>			
			{
				_props.list.map((_item, _i) => {					
					return <li key = {"" + _i} onClick = {() => {onTodoClick(_i)}} > {_item} </li>
				})
			}
			</ul>
		</div>
	);
}

export default TodoList;