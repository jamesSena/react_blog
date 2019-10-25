import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase'
import './dashboard.css'
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            nome:localStorage.nome
        };
    
        this.logout = this.logout.bind(this);
    }
    
    async componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('dashboard');
            return null;
        }
    firebase.getUserName((info)=>{
        localStorage.nome = info.val().nome
        this.setState({nome:  localStorage.nome});
    });

    }

    logout()
    {

    }
    render(){
        return(
            <div>            
                <div>
                    <h1>Olá {this.state.nome}</h1>
                    <Link to="/dashboard/new">Novo Post</Link>
                </div>   
                <p>Logado com: {this.state.nome} </p>
                <button onClick={()=> this.logout()}>Deslogar</button>
            </div>

        );
    }
}
export default withRouter(Dashboard);