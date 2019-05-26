import { GET_USERS_SUCCESS, GET_USERS_ERROR } from '../constants/users';

export const getUsersActionSuccess = payload => ({
	type: GET_USERS_SUCCESS,
	payload: payload
});

export const getUsersActionError = err => ({
	type: GET_USERS_ERROR,
	payload: err
});