const { combineReducers } = require("redux");
const { default: employeeReducer } = require("./employeeReducer");
const { default: userReducer } = require("./userReducer");

export const rootReducer = combineReducers({
    users: userReducer,
    employees: employeeReducer
})