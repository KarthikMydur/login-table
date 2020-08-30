import React from 'react';
import Employees from './component/Employees';
import Login from './component/Login';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => (
    <div>
        <BrowserRouter>
            <Route path='/user/employees' component={Employees} exact={true}/>
            <Route  path="/" component={Login} exact={true}/>
        </BrowserRouter>
    </div>
)

export default App;