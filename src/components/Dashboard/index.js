import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './dashboard.css'
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
        };
    

    }
    
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
              
            </div>
        );
    }
}
export default withRouter(Dashboard);