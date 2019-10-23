import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './login.css'
class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
        };
        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);

    }

    componentDidMount(){
        if(firebase.getCurrent()){
            return this.props.history.replace('dashboard');
        }
    }

    entrar(e){
        e.preventDefault();
        this.login();
    }

    login = async() => {
        const {email, password} = this.state;
        try{
            await firebase.login(email, password).catch((error)=>{
                if(error.code ==='auth/user-not-found'){
                    alert("usuario invalido");
                }else{
                    alert('Codigo de erro: ' + error.code);
                }

            });
            this.props.history.replace('/dashboard');
        }catch(e){
            alert('error: ' + e);

        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.entrar} id="login">
                    <label>Email: </label> <br/>
                    <input type="email" autoComplete="off" autoFocus value={this.state.email}
                    onChange={(event)=> this.setState({email: event.target.value})} placeholder="teste@teste.com"
                    /><br/>
                    
                    <label>Password: </label> <br/>
                    <input type="password" autoComplete="off" value={this.state.password}
                    onChange={(event)=> this.setState({password: event.target.value})} placeholder="*******"
                    /><br/>
                    <button type="submit">Entrar</button>
                    <Link to="/register"> Ainda não possui uma conta? </Link>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);