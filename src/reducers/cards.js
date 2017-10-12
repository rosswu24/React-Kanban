/*jshint esversion: 6 */

import {ADD_CARD, LOAD_CARD} from '../actions/Cards.js';

const initialState = [{title:'title', priority: 'priority', status: 'status', created: 'created', assigned: 'assigned'}];

const cards = (state = initialState, action) =>{
  
  console.log('in reducer action and state: ', state, action);

  switch(action.type){

    case ADD_CARD:
    console.log('TEST Switch', [cards]);
    return [ ...state, action.card];

    case LOAD_CARD:
    console.log('TEST Switch: ', [cards]);
    return[... state, action.card];

    default: 
      return state;
  }
};

export default cards;