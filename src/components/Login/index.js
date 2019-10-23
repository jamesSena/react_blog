import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
        };
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form>
                    <label>Email: </label> <br/>
                    <input type="email" autoComplete="off" autoFocus value={this.state.email}
                    onChange={(event)=> this.setState({email: event.target.value})} placeholder="teste@teste.com"
                    /><br/>
                    
                    <label>Password: </label> <br/>
                    <input type="password" autoComplete="off" value={this.state.password}
                    onChange={(event)=> this.setState({password: event.target.value})} placeholder="*******"
                    /><br/>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);