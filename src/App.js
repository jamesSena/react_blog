import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './global.css';
import Home from './components/Home'
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import firebase from './firebase'
class App extends Component{

state={
  firebaseInitialized:false
};
//
componentDidMount(){
  firebase.isInitialized().then(resultado =>{
    this.setState({firebaseInitialized:resultado});
  });
}
  render(){
    return this.state.firebaseInitialized !== false ?(
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />

        </Switch>
      </BrowserRouter>
    ) :(<h1>carregando....</h1>);
  }
}


export default App;
