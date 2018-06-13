import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token,
		userId
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const auth = (email, password, isSignup) => {
	return dispatch => {
		dispatch(authStart());
		const API_KEY = 'AIzaSyBJ1Q9ItNpSH693NNGDb1VOFmeCLDS0998';
		let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
		if (!isSignup) {
			url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
		}
		const authData = {
			email,
			password,
			returnSecureToken: true
		};
		axios.post(url, authData)
			.then(res => {
				const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000);
				localStorage.setItem('token', res.data.idToken);
				localStorage.setItem('expirationTime', expirationTime);
				localStorage.setItem('userId', res.data.localId);
				dispatch(authSuccess(res.data.idToken, res.data.localId));
				dispatch(checkAuthTimeout(res.data.expiresIn));
			})
			.catch(err => {
				dispatch(authFail(err.response.data.error));
			});
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_INITIATE_LOGOUT
	}
};

export const checkAuthTimeout = (expirationTime) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const setAuthRedirectPath = path => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path
	}
};

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const expirationTime = new Date(localStorage.getItem('expirationTime'));
			if (expirationTime <= new Date()) {
				dispatch(logout());
			} else {
				const userId = localStorage.getItem('userId');
				dispatch(authSuccess(token, userId));
				dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime()) / 1000));
			}
		}
	}
};