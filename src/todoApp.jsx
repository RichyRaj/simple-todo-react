import React from 'react';
import ReactDOM from 'react-dom';
import Header from './view/header.jsx';
import TodoForm from './form/todoForm.jsx';
import TodoList from './todoList.jsx';

class TodoApp extends React.Component {
	constructor () {
		super();
		this.handleSubmission = this.handleSubmission.bind(this);
		this.handleTodoClick = this.handleTodoClick.bind(this);
		this.state = {			
			list: []
		}
	}

	handleSubmission (_entry) {
		console.log(_entry + " Submitted");
		this.setState({
			list: [...this.state.list, _entry]
		});		
	}

	handleTodoClick (_id) {
		// _id => Array id
		this.setState({
			list: this.state.list.filter((_item, _i) => {return (_i !== _id)})
		});
	}

	render () {
		return (
			<div>
				<Header />
				<TodoForm onSubmit = {this.handleSubmission} />
				<TodoList list = {this.state.list} onTodoClick = {this.handleTodoClick} />
			</div>
		);
	}
}


export default TodoApp;