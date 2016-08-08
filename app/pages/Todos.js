'use strict';

import React from 'react';
import Todo from '../components/todo/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
    constructor() {
	super();

	this.state = {
	    todos: TodoStore.getAll()
	}
    }

    componentWillMount() {
	TodoStore.on('change', this.getTodos)
	console.log("count", TodoStore.listenerCount('change'));
    }

    componentWillUnmount() {
	TodoStore.removeListener('change', this.getTodos);
    }

    getTodos() {
	this.setState({
	    todos: TodoStore.getAll()
	});
    }

    reloadTodos() {
	TodoActions.reloadTodos();
    }

    createTodo() {
	TodoActions.createTodo(Date.now())
    }

    render() {
	const {todos} = this.state;

	const {query} = this.props.location;
	const {params} = this.props;
	const {article} = params;
	const {date, filter} = query;

	const TodoList = todos.map(todo => {
	    return <Todo key={todo.id} {...todo} />
	});


	return (
	    <div>
		<button onClick={this.reloadTodos.bind(this)}>Reload!</button>
		<h1>Todos ({article})</h1>
		<h4>date: {date}, filter: {filter}</h4>

		<div className="row">{TodoList}</div>
	    </div>
	)
    }

}