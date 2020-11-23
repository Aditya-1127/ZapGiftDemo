import React, { Component , useState, useEffect} from 'react'
import '../../App.css'
import { Button } from '../Button';
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    

   
    render() {
        
        return (
            <form class="ui form">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="number" className="form-control" />
                </div>

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
                   <button class="ui inverted green button" >
                      Sign Up
                   </button>
                </Link>
                 </div>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        );
    }

}