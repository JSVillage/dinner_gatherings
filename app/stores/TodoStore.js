import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
	super();
	this.todos = [
	    {
		id: 123312123,
		text: 'Do something!',
		complete: false
	    },{
		id: 123312124,
		text: 'Do something else',
		complete: false
	    }
	]
    }

    createTodo(text){
	const id = Date.now();

	this.todos.push({
	    id,
	    text,
	    complete: false
	});

	this.emit('change');
    }

    getAll(){
	return this.todos;
    }

    handleActions(action){
	switch(action.type){
	    case 'CREATE_TODO': {
		this.createTodo(action.text);
	    }

	    case 'RECEIVE_TODOS': {
		this.todos = [...this.todos, ...action.todos];
		console.log(action.todos);
		this.emit('change');
	    }
	}
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;