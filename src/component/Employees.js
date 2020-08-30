import React from 'react';
import { connect } from 'react-redux';
import { startGetEmployees } from '../action/employeeAction';

import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            empList: []
        }
    }
   
    componentDidMount(){
        this.props.onGetEmp()   
    }

    componentDidUpdate(prevProps){
        if(prevProps.employees !== this.props.employees){
            this.setState({empList: this.props.employees})
        }
    }
    
    render() {
        console.log('inrender', this.state.empList);
        
        return(
            <div align='center'>
                <h1>Employees - {this.state.empList.length}</h1>
                <Table style={{width: 750}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Age</TableCell>
                            <TableCell align='center'>Gender</TableCell>
                            <TableCell align='center'>Email</TableCell>
                            <TableCell align='center'>PhoneNo.</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        <TableBody>
                            {this.state.empList.map((emp) => (
                                <TableRow key={emp.id}>
                                    <TableCell align='center'>{emp.id}</TableCell>
                                    <TableCell align='center'>{emp.name}</TableCell>
                                    <TableCell align='center'>{emp.age}</TableCell>
                                    <TableCell align='center'>{emp.gender}</TableCell>
                                    <TableCell align='center'>{emp.email}</TableCell>
                                    <TableCell align='center'>{emp.phoneNo}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    }
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees.employees.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onGetEmp: () => dispatch(startGetEmployees())
    }  
}

export default connect (mapStateToProps, mapDispatchToProps) (Employees);