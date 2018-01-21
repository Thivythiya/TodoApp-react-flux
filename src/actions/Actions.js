import AppDispatcher from "../AppDispatcher";
import AppConstants from "../constants/AppConstants";

export default {
	addTodoItem: function(value) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_TODO,
            value: value,
        });
    },
    deleteTodoItem: function(id){
    	AppDispatcher.handleViewAction({
    		actionType: AppConstants.DELETE_TODO,
    		id: id
    	})
    }
}