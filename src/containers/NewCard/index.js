/*jshint esversion: 6 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCard} from '../../actions/Cards.js';

class NewCard extends Component{
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      priority: '',
      status: '',
      created: '',
      assigned: ''
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  submitCard(e){
    // let newState = {
    //  title: this.state.title,
    //  priority: this.state.priority, // low
    //  created: this.state.created, //input users name in here 
    //  assigned:this.state.assigned
    // };
 console.log('this.state: ', this.state);
  this.props.addCard(this.state);
  }


  handleNewTitle(e){
    this.setState({
      title:e.target.value
    });
  }

  handleNewPriority(e){
    this.setState({
      priority:e.target.value
    });
  }

  handleNewStatus(e){
    this.setState({
      status:e.target.value
    });
  }

  handleNewCreate(e){
  this.setState({
    created: e.target.value
  });
}

  handleNewAssigned(e){
    this.setState({
      assigned: e.target.value
    });
  }

render(){
  // console.log('test Render: ', this.state);

  return(
    <div>
      <th>
      </th>
      <tr>
        <td>Props will go here</td>
      </tr>

      <input
        type ="text"
        placeholder ="Subject:"
        onChange={this.handleNewTitle.bind(this)}
      />

      <input
        type ="text"
        placeholder ="Priority:"
        onChange={this.handleNewPriority.bind(this)}
      />

      <input
        type ="text"
        placeholder ="Status:"
        onChange={this.handleNewStatus.bind(this)}
      />

      <input
        type ="text"
        placeholder ="Created By:"
        onChange={this.handleNewCreate.bind(this)}
        />

        <input
        type ="text"
        placeholder ="Assiged To:"
        onChange={this.handleNewAssigned.bind(this)}
        />

      <br />

     <button onClick={this.submitCard.bind(this)}>Submit New Card </button>

    </div>
    )
}

}

const mapDispatchToProps = (dispatch) =>{
  return {
    addCard: (card) =>{ //add card name needs to match this.props name in submit button
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCard = connect(
    null,
    mapDispatchToProps
)(NewCard)

export default ConnectedNewCard;