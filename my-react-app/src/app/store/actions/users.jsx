import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../constants/users';

export const getUsersAction = () => ({
	type: GET_USERS
});

export const getUsersActionSuccess = payload => ({
	type: GET_USERS_SUCCESS,
	payload
});

export const getUsersActionError = err => ({
	type: GET_USERS_ERROR,
	payload
});