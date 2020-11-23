import React, { Component , useState, useEffect} from 'react'
import '../../App.css'
import { Button } from '../Button';

import {Link} from 'react-router-dom';

export default class Login extends Component {

    constructor(props){  
        super(props);  
       
        } 
 
   
    render() {
        
        return (
            <form class="ui form">
                <h3>LOGIN</h3>

                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"  />
                </div>

                <div class="container">
                 <div class="center">
                 <Link to='/profile' className='btn--mobile'>
                   <button   class="ui inverted green button" >
                      Login
                   </button>

                </Link>
                 </div>
                </div>
               
            </form>
        );
    }

}