import React from 'react';
import { startGetUser } from '../action/userAction';
import { connect } from 'react-redux';
import  Swal from 'sweetalert2';
import "./Login.css";

import { Typography, FormControl, InputLabel, FilledInput, Button } from '@material-ui/core';


const validUsername = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

const validPassword = RegExp(
    /^((?=.*\d)(?=.*[a-z]).{8,15})$/
);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};


class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: {
                username:"",
                password:""
            }
        }
    }

    

    handleChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        let errors = this.state.errors;
       
        //testing the Regex and assigning the error
        switch(name) {
            case "username":
                errors.username = validUsername.test(value) ? "" : "Username is not valid";
                break;
            case "password":
                errors.password = validPassword.test(value) ? "" : "Password is not valid";
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }

    handleClick = (e) => {
        e.preventDefault();
        if(validateForm(this.state.errors)){
            this.props.onLogin()
            const { username, password } = this.props.users;
            if((this.state.username === username) && (this.state.password === password)){
                //alert on login
                Swal.fire({
                    icon: "success",
                    title: "Sucessfully Log in!!"
                });
                window.location.href = "/user/employees";
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...!!",
                    text: "please enter the valid details"
                    });
                }
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...!!",
                text: "please enter the valid details"
              });
        }
        
    }

    componentDidUpdate(){
        this.props.onLogin()
    }

    render() {
        const {errors} = this.state;
        return (
            <div align='center'>
                <br/>
                <br/>
                <Typography variant="h4">Login</Typography>
                <br/>
                <br/>
                <form>
                    <FormControl variant='filled'>
                        <InputLabel>Email</InputLabel>
                        <FilledInput
                            style={{ width: 500}}
                            type="text"
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        {errors.username.length > 0 && (
                            <span className="error">{errors.username}</span>
                        )}
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl variant='filled'>
                        <InputLabel>Password</InputLabel>
                        <FilledInput
                            style={{width: 500}}
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        {errors.password.length > 0 && (
                            <span className="error">{errors.password}</span>
                        )}
                    </FormControl>
                    <br/>
                    <br/>
                   <Button
                    variant='contained'
                    color='primary'
                    onClick={this.handleClick}
                    >Login</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: () => dispatch(startGetUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);