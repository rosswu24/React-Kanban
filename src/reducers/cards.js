import {ADD_CARD} from '../actions/Cards.js';

const initialState = [''];

const cards = (state = initialState, action) =>{
	
	console.log('test STATE: ', initialState, this.state);

	switch(action.type){
		case ADD_CARD:
		console.log('TEST Switch', [...state, action.card]);
		return [ ... state,action.card];

		default: 
			return state;
	}
};

export default cards;