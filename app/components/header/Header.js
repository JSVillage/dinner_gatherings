'use strict';

import React from 'react';
import Title from './Title';

export default class Header extends React.Component {
    constructor() {
	super()
    }

    render() {
	return (
	    <header className="header" style={{backgroundImage: "url('img/home-bg.jpg')"}}>
		<div className="container">
		    <div className="row">
			<div className="col-xs-12">
			    <div className="site-heading">
				<Title title={this.props.title}/>
				<hr className="small"/>
				<span className="header__subheading">A Clean Blog Theme by Start Bootstrap</span>
			    </div>
			</div>
		    </div>
		</div>
	    </header>
	)
    }
}