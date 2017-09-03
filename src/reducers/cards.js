import {ADD_CARD} from '../actions/Cards.js';

const initialState= [];

const cards = (state = initialState, action) =>{
  switch(action.type){
    case ADD_CARD:
    return[...state, 
    action.title,
    action.priority,
    action.status,
    action.created,
    action.assigned];

    default: 
      return state;
  }
};

export default cards;