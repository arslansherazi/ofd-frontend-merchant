import React, {Component} from 'react'
import './styling.css'
import { Link } from 'react-router-dom'



export class Template extends Component
{
    render ()
    {
        return(
            <div className='container'>
                <div className='row h-100'>
                    <div className='col-xl-2'></div>

                    <div className='col-xl-8 my-auto' id='login_main_container'>
                        <div className='row'>
                            <div className='col-xl-4'>
                                <div id='login_left_container'>
                                    <img src={require('../../assets/images/icon.png')} id='main_image'/>
                                </div>
                            </div>

                            <div className='col-xl-8'>
                                <div id='login_right_container'>
                                    <h2 id='merchant_portal'>Merchant Login Portal</h2>

                                    <input type='text' className='nbs_input' placeholder='username'/>

                                    <input type='password' className='nbs_input' placeholder='password'/>

                                    <input type='button' id='submit_btn' value='Login' />

                                    <span id='forgot_password_text'>Forgot password?</span>

                                    <Link to='/signup' id='signup_btn'>
                                        <span id='login_text'>Create your account &#8594;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-2'></div>
                </div>
            </div>
        )
    }
}