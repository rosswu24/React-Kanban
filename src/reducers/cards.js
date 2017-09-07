/*jshint esversion: 6 */

import {ADD_CARD, EDIT_CARD} from '../actions/Cards.js';

const initialState = [{title:'title', priority: 'priority', status: 'status', created: 'created', assigned: 'assigned'}];

const cards = (state = initialState, action) =>{
  
  console.log('in reducer action and state: ', state, action);

  switch(action.type){

    case ADD_CARD:
    console.log('TEST Switch', [...state, action.card]);
    return [ ...state, action.card];

    case EDIT_CARD:
    console.log('Test Switch', [... action.editCard]);
    return[... action.editCard];

    default: 
      return state;
  }
};

export default cards;