
const initialState = {
	text : ''
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'ADD_TEXT':
			return {...state, text : state.text + action.payload}
		default:
			return state;
	}
}