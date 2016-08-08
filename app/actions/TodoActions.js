'use strict';

import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
	type: 'CREATE_TODO',
	text
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
	type: 'DELETE_TODO',
	id
    })
}

export function reloadTodos(){
    dispatcher.dispatch({type: "FETCH_TODOS"});

    setTimeout(() => {
	dispatcher.dispatch({
	    type: "RECEIVE_TODOS", todos: [{
		id: Date.now(),
		text: 'Do something AGAIN!',
		complete: false
	    },{
	    	id: Date.now() + 1,
		text: 'Do something RIGHT NOW',
		complete: false
	    }]
	})
    }, 1000);
}