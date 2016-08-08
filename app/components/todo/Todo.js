'use strict';

import React from 'react';

export default class extends React.Component {
    render(){
	const {id, text, complete} = this.props;

	return (
	    <div className="col-xs-4 todo">
		<div className="todo__preview">
		    <a href="/">
			<h4 className="todo__title">
			    {text}
			</h4>
			<span>Complete: {complete ? 'true' : 'false'}</span>
		    </a>
		    <p className="todo__meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
		</div>
		<hr />
	    </div>
	)
    }
}