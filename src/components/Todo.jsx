import React from 'react';
import Actions from '../actions/Actions';
class Todo extends React.Component{
	constructor(){
		super();
	}
	deleteTodo(item){
		Actions.deleteTodoItem(item);
	}
	render(){
		let {todolist} = this.props;
		console.log("todolist", todolist);
		return(
			<div>	
				{
					todolist.map((item) => {
						return (
							<div key={item.id}>
								<span >{item.item}</span>
								<button onClick={this.deleteTodo.bind(this,item)}>DELETE</button>
							</div>
							)

					})
				}	
			</div>	
		)
	}
}
export default Todo;