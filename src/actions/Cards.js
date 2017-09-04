//create the payload
export const ADD_CARD = 'ADD_CARD';

export const addCard = (card) => {
	console.log('addCard: actions/cards.js' );
	return {
		type: ADD_CARD,
		card:card
	};
 };



//Use status as an array so later on in fuction can run something like 

// if (status.indexOf(Queue) === 1){
//  return something
// run this one ^ in the NewCard from. 

//make status and created and assigned default to something if not filled out 