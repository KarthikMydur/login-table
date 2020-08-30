import empData from '../api/Employee.json';
import actionTypes from './actionTypes';

export const startGetEmployees = () => {
    return (dispatch) => {
        dispatch(getEmployees(empData))
    }
}

export const getEmployees = (data) => {
    console.log('action', data);
    return{
        type: actionTypes.GET_EMPLOYEES,
        payload: data
    }
}