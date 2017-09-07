//create the payload
/*jshint esversion: 6 */

export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD ='EDIT_CARD';

export const addCard = (card) => {
  console.log('addCard: actions/cards.js', card );
  return {
    type: ADD_CARD,
    card:card
  };
 };

 export const editCard = (editCard)=>{
  console.log('editCard: actions/cards.js', editCard);
  return{
    type:EDIT_CARD,
    editCard:editCard
  };
 };



//Use status as an array so later on in fuction can run something like 

// if (status.indexOf(Queue) === 1){
//  return something
// run this one ^ in the NewCard from. 

//make status and created and assigned default to something if not filled out 

