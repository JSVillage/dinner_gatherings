'use strict';

import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navigation extends React.Component {
    constructor(){
	super();
	this.state = {
	    collapsed: false
	};
    }

    handleRefClick(){
	this.refs.navInput.focus();
    }

    toggleCollapse(){
	const collapsed = !this.state.collapsed;
	this.setState({collapsed});
    }

    render(){
	const {location} = this.props;
	const {collapsed} = this.state;
	const activeClassName = 'nav__item_active';
	const favoriteClass = location.pathname === '/' ? activeClassName : '';
	const todosClass = location.pathname.match(/^\/todos/) ? activeClassName : '';
	const settingsClass = location.pathname.match(/^\/settings/) ? activeClassName : '';
	const navClass = collapsed ? 'collapse' : '';

	return (
	    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
		<div className="container-fluid">

		    <div className="navbar-header page-scroll">
			<button type="button" className="navbar-toggle" data-toggle="collapse"
				data-target="#bs-example-navbar-collapse-1"
				onClick={this.toggleCollapse.bind(this)}>
			    <span className="sr-only">Toggle navigation</span>
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="index.html">Start Bootstrap</a>
		    </div>

		    
		    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">

			<ul className="nav navbar-nav navbar-right">
			    <li>
				<IndexLink to="/" className={"nav__item " + favoriteClass}>Favorites</IndexLink>
			    </li>
			    <li>
				<Link to="todos" className={"nav__item " + todosClass}>Todos</Link>
			    </li>
			    <li>
				<Link to="settings" className={"nav__item " + settingsClass}>Settings</Link>
			    </li>
			</ul>

			<button className="btn btn-primary" onClick={this.handleRefClick.bind(this)}>REF</button>
			<input type="text" ref="navInput"/>
		    </div>

		</div>

	    </nav>
	)
    }
}

Navigation.contextTypes = {
    color: React.PropTypes.string
};