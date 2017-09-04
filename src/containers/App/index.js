import React, { Component } from 'react';
// import logo from '.././logo.svg';
import NewCard from '../NewCard/';
import queueComponents from '../../components/Queue.js';
import {connect} from 'react-redux';
import {addCard} from '../../actions/Cards.js'; // grab from the actions/Card, function
import './App.css';


class App extends Component{
	render(){
		return(
			<div>
				<h1>hello world</h1>

				<section id = 'queue'>
					<h2> Queue </h2>
						<NewCard 
							newCardTitle= {this.props.title}
							newCardPriority = {this.props.priority}
							newCardCreated={this.props.created}
							newCardAssigend={this.props.assigned}
						/>
				</section>

				<section id = 'inProgress'>
					<h2>In Progress</h2>
						Progess page
				</section>

				<section id = 'done'>
					<h2>Done</h2>
						Done
				</section>




				</div>
			)
	}

}

const mapStateToProps = (state) =>{
	return {
		title: state.title,
		priority: state.priority,
		created: state.created
	}
}
const ConnectedApp = connect()(App)
export default ConnectedApp;