'use strict';

import React from 'react'

export default class Title extends React.Component {
    constructor(){
	super()
    }

    render(){
	return (
	    <h1 className="header__title">{this.props.title}</h1>
	)
    }
}