//create the payload
export const ADD_CARD = 'ADD_CARD';

export const addCard = ( title,priority,status,created, assigned) => {
	return {
		type: ADD_CARD,
		title: title,
		priority: priority,
		status: status,
		created: created,
		assigned: assigned
	};
 };

