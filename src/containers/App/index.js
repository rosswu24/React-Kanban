/*jshint esversion: 6 */

import React, { Component } from 'react';
// import logo from '.././logo.svg';
import NewCard from '../NewCard/';
import {connect} from 'react-redux';
import {addCard} from '../../actions/Cards.js'; // grab from the actions/Card, function
import './App.css';


class App extends Component{
  render(){
    console.log('app.js', this.props.cards);
    return(
      <div>
        <section id = 'queue'>
          <h2> Queue </h2>
          {
            this.props.cards.map(card=>{
              console.log('card:', card);
              return (
                <NewCard
                  title = {card.title}
                  priority = {card.priority}
                  status = {card.status}
                  created = {card.created}
                  assigned = {card.assigned}
                />
              )
            })
          }
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
      console.log('mapStateToProps: ', state)
  return {
    cards: state.cards // this points to the reducers cards 
    //need to define state, because this is from the state store 

  }
}

const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp;