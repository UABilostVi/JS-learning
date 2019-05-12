import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR
} from '../constants/users';

const initState = {
	data: [],
	err: null
};

export const usersReducer = (state = initState, action) => {
	switch(action.type) {
		case GET_USERS: {
			return state;
		};
		case GET_USERS_SUCCESS: {
			return { ...state, data: action.payload };
		};
		case GET_USERS_ERROR: {
			return { ...state, err: action.payload };
		}
		default: return state;
	}
}