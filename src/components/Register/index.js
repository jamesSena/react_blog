import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './register.css'
class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            nome:'',
            email:'',
            password:'',
        }; this.register.bind(this);
        this.onRegister  = this.onRegister.bind(this);
        this.register = this.register.bind(this);
    }

    register(e){
        e.preventDefault();
        this.onRegister();
    }
    onRegister = async()=>{
        try {
            await firebase.register(this.state.nome, this.state.email, this.state.password);
            this.props.history.replace('/Dashboard');
        } catch (error) {
            alert(error.message);
        }
    }

    render(){
        return(
            <div>
                <h1 className='register-h1'>Novo Usuario</h1>
               <form onSubmit={this.register} id="register">
                   <label>Nome:</label><br/>
                   <input type="text" value={this.state.nome} autoFocus autoComplete="off"
                    onChange={(e)=> this.setState({nome: e.target.value})} placeholder="Nome"/><br/>

                    <label>Email:</label><br/>
                    <input type="text" value={this.state.email}  autoComplete="off"
                    onChange={(e)=> this.setState({email: e.target.value})}  placeholder="Email"/><br/>
                     

                    <label>Senha:</label><br/>
                    <input type="text" value={this.state.password}  autoComplete="off"
                    onChange={(e)=> this.setState({password: e.target.value})}   placeholder="Senha"/><br/>
                     

                     <button type="submit">Cadastrar</button>
               </form>
            </div>
        );
    }
}
export default withRouter(Register);