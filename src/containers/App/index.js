import React, { Component } from 'react';
// import logo from '.././logo.svg';
import NewCard from '../NewCard/'
import {connect} from 'react-redux';
import {addCard} from '../../actions/Cards.js'; // grab from the actions/Card, function
import './App.css';

class App extends Component{
	render(){
		return(
			<div>
				<h1>hello world</h1>

				<NewCard />
				</div>
			)
	}

}
export default App;