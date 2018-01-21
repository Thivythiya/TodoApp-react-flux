import React from 'react';
import Actions from '../actions/Actions'
class TodoList extends React.Component{
	constructor(){
		super();
		this.state ={
			item: ""
		}
	}
	addtodoItem(){
		Actions.addTodoItem(this.state.item);
		this.setState({item: ""});
	}
	addItem(e){
		let item = e.target.value;
		this.setState({item: item})
	}
	render(){
		return(
			<div>
				<input type="text" value={this.state.item} onChange = {this.addItem.bind(this)}/>
				<button onClick={this.addtodoItem.bind(this)}>ADD</button>
			</div>
		)
	}
}
export default TodoList;