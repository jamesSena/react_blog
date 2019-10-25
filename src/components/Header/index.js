import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
export default function Header(){
    return(
        <header id='header-main'>
            <div className='header-content'>
                <Link to='/'> Blog </Link>
                <Link to='/Login'> Entrar</Link>           
            </div>
        </header>
    );
}