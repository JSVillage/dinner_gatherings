'use strict';

require("./scss/core.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import Archives from './pages/Todos';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

ReactDOM.render(
    <Router history={hashHistory}>
	<Route path="/" component={Layout}>
	    <IndexRoute component={Favorites}></IndexRoute>
	    <Route path="todos(/:todo)" name="todos" component={Archives}></Route>
	    <Route path="settings" name="settings" component={Settings}></Route>
	</Route>
    </Router>,
    document.getElementById('app')
);
