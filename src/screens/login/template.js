import React from 'react'
import './styling.css'
import { Link } from 'react-router-dom'


export const template = component =>
{
    return(
        <div className="container">
            <div className="row h-100">
                <div className="col-xl-2"></div>

                <div className="col-xl-8 my-auto" id="login_main_container">
                    <div className="row">
                        <div className="col-xl-4 d-flex flex-column align-items-center justify-content-center">
                            <img src={require("../../assets/images/icon.png")} id="main_image" alt="icon.png" />

                            <span id="main_image_text">Online Food Depot</span>
                        </div>

                        <div className="col-xl-8 d-flex flex-column align-items-center justify-content-center" id="">
                            <h2 id="merchant_portal">Merchant Login Portal</h2>

                            <input type="text" className="nbs_input" placeholder="username" name="username" onChange={component.handle_value}/>

                            <input type="password" className="nbs_input" placeholder="password" name="password" onChange={component.handle_value}/>

                            <input type="button" id="submit_btn" value="Login" onClick={component.login}/>

                            <span id="forgot_password_text">Forgot password?</span>

                            <Link to="/signup" id="signup_btn">
                                <span id="login_text">Create your account &#8594;</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2"></div>
            </div>
        </div>
    )
}