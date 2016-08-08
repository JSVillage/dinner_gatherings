'use strict';

import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class Layout extends React.Component {

    constructor(){
	super();
    }

    getChildContext(){
	return {color: "red"}
    }

    navigate() {
	this.props.history.pushState(null, '/');
    }

    render(){
	const { location } = this.props;

	return (
	    <div>
		<Navigation location={location}/>
		<Header title="Reactive news"/>
		<div className="container">
		    {this.props.children}
		</div>
		<Footer />
	    </div>
	)
    }
}

Layout.childContextTypes = {
    color: React.PropTypes.string
};