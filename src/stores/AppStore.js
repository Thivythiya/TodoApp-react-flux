import StoreInterface from "./StoreInterface";
import AppConstants from "../constants/AppConstants";


class AppStore extends StoreInterface{
	constructor() {
        super({
            todoList: [],
        }, "dataStore");
    }
 	_registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case AppConstants.ADD_TODO:
                let {todoList} = this._store;
                todoList.push({
                    id: todoList.length + 1,
                    item: action.value
                });
                this._store.todoList = todoList;
                this._emitChange();
            	console.log("Added to the todo");
                break;
            case AppConstants.DELETE_TODO:
                let todo = this._store.todoList;
                todo.splice(action.id,1);
                console.log('delete',todo);
                todo = todo;
                this._emitChange();
                break;
            default:
                break;
        }
    }
}

// initial the store 
export default new AppStore();
