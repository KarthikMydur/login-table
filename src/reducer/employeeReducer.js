import actionTypes from '../action/actionTypes';

const initialState = {
    employees: []
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_EMPLOYEES:
            console.log('reducer', action.payload);
            return {...state, employees: action.payload}
        default:
            return state
    }
}

export default employeeReducer;