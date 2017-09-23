import React from 'react';
import ReactDOM from 'react-dom';


class TodoForm extends React.Component {
	constructor () {
		super();
		this.state = {
			value: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit (_e) {
		this.props.onSubmit(this.state.value + "");
		this.setState({
			value: ''
		});
		_e.preventDefault();
	}

	handleChange (_e) {
		this.setState({
			value: _e.target.value
		});
	}

	render () {
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>
					<input type="text" placeholder="What do you want to do ?" value = {this.state.value} onChange = {this.handleChange} />
				</form>
			</div>
		);
	}
}

export default TodoForm;