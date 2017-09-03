import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCard} from '../../actions/Cards.js';

class NewCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
	}

	submitCard(e){
		this.props.addCard(this.prop.userInput);
	}

	handleNewQueue(e){
		this.setState({
			userInput: e.target.value
		});
	}

	render(){
		return(
			<div>
				<th>
					<h1>Queue</h1>
				</th>
					<tr>
						<td>Props will go here</td>	
					</tr>

					<br />

					<input 
						type="text"
						placeholder="To Do"
						onChange={this.handleNewQueue.bind(this)}/>
				<button onClick={this.submitCard.bind(this)}>Submit New Card </button>
			</div>
		)
	}
}

export default NewCard;