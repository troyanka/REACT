import {BUY_ICECREAM} from './iceCreamTypes'

const initialstate = {
	numOfIceCreams: 20
}

const iceCreamReducer = (state = initialstate, action) => {
	switch (action.type) {
		case BUY_ICECREAM: return {
			...state,
			numOfIceCreams: state.numOfIceCreams - 1
		}
		default:
			return state;
	}
}

export default iceCreamReducer