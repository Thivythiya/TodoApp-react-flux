import React from 'react';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import TodoList from './TodoList';
import Todo from './Todo';

class TodoApp extends React.Component{
	constructor(){
		super();
		this.state = {
			todoList: []
		}
	}
	componentWillMount(){
		AppStore.addStoreListener(this._onModelChange.bind(this));
	}
	_onModelChange(){
		let {todoList} = AppStore.getAll();
		this.setState({
			todoList: todoList
		})
	}
	render(){
		let {todoList} = this.state;
		return(
			<div>
				<TodoList/>
				<Todo todolist = {todoList}/>
			</div>
		)
	}
}
export default TodoApp;