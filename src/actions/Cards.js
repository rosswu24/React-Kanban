//create the payload
/*jshint esversion: 6 */

import {getCards, postCard} from '../lib/xhr.js';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARD = 'LOAD_CARD';

// export const addCard = (card) => {
//  return {
//    type: ADD_CARD,
//    card:card
//  };
// };

 export const addCard =(addCard) =>{
  console.log('testing addCard: ', addCard);
  return(dispatch)=>{
   return postCard(addCard) // this is from the XML response
   .then((card)=>{
    console.log('test card: ', card);
     dispatch({
       type: ADD_CARD,
       card: card
     });
   });
  };
 };

// redux thunk
 export const loadCard =(loadCard) =>{
  return(dispatch)=>{
   return getCards() // this is from the XML response
   .then(({cards})=>{
     dispatch({
       type: LOAD_CARD,
       cards: cards
     });
   });
  };
 };

//Use status as an array so later on in fuction can run something like 

// if (status.indexOf(Queue) === 1){
//  return something
// run this one ^ in the NewCard from. 

//make status and created and assigned default to something if not filled out 