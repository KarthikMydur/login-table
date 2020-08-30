import loginData from '../api/Login.json';
import actionTypes from './actionTypes';

export const startGetUser = () => {
    return(dispatch) => {
        dispatch(getUser(loginData))
    }
}

export const getUser = (data) => {
    return {
        type: actionTypes.GET_USER,
        payload: data
    }
}
