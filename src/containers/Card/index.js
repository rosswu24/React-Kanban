/*jshint esversion: 6 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCard,loadCard} from '../../actions/Cards.js';

class NewCard extends Component{
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      priority: 'low',
      status: 'queue',
      created: '',
      assigned: ''
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  submitCard(){
    this.props.addCard(this.state);
  }

  submitGetCard(){
    this.props.loadCard();
  }

  nextButton(e){
    // let progress = 'In Progress'.toLowerCase();
    // // this.props.addCard.map(card(currentValue, index) =>{
    //  if(progress.includes(this.state)){
    //    console.log('hi');
    //  }
    // // });
  }

  moveCards(){
    let status = this.state.status.toLowerCase();
    if (status === 'In Progress'.toLowerCase()){
      //move the card to the next field
      console.log('IT WORKS');
    }else{
      //display an error
    }
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
     <button onClick={this.submitGetCard.bind(this)}>Get</button>

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