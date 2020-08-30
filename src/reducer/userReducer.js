const { default: actionTypes } = require("../action/actionTypes")

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER:
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default userReducer;

