import React from 'react'
import './styling.css'
import { Link } from 'react-router-dom'


export const template = component =>
{
    // temlaplate dynamic content
    var usernameInput, passwordInput
    if (component.state.isUsernameVerified)
        usernameInput = <div class="d-flex flex-column required_message_container">
            <input type="text" class="nbs_input" placeholder="username" name="username" onChange={component.handleValue}/>
        </div>
    else
        usernameInput = <div class="d-flex flex-column required_message_container">
            <input type="text" class="nbs_input_red" placeholder="username" name="username" onChange={component.handleValue}/>
            <span class="required_message">*{component.state.usernameVerificationMessage}</span>
        </div>

    if (component.state.isPasswordVerified)
        passwordInput = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input align-items-center">
                <input type={component.state.passwordType} class="nbs_input_internal" placeholder="password" name="password" onChange={component.handleValue} />
                <img src={component.state.passwordIcon} id="password_icon" alt="show_password_icon" onClick={component.handlePasswordIcon} />
            </div>
        </div>
    else
        passwordInput = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input_red align-items-center">
                <input type={component.state.passwordType} class="nbs_input_internal" placeholder="password" name="password" onChange={component.handleValue} />
                <img src={component.state.passwordIcon} id="password_icon" alt="show_password_icon" onClick={component.handlePasswordIcon} />
            </div>
            <span class="required_message">*{component.state.passwordVerificationMessage}</span>
        </div>

    // template content
    return(
        <div class="container" id="login_container">
            <div class="row h-100">
                <div class="col-xl-2"></div>

                <div class="col-xl-8 my-auto" id="login_main_container">
                    <div class="row">
                        <div class="col-xl-4 d-flex flex-column align-items-center justify-content-center">
                            <img src={require("../../assets/images/icon.png")} id="main_image" alt="icon.png" />

                            <span id="main_image_text">Online Food Depot</span>
                        </div>

                        <div class="col-xl-8 d-flex flex-column align-items-center justify-content-center" id="">
                            <h2 id="merchant_portal">Merchant Login Portal</h2>

                            {usernameInput}
                            
                            {passwordInput}

                            <input type="button" id="submit_btn" value="Login" onClick={component.login}/>

                            <Link to="/forgot/password" id="signup_btn">
                                <span id="forgot_password_text">Forgot password?</span>
                            </Link>

                            <Link to="/signup" id="signup_btn">
                                <span id="login_text">Create your account &#8594;</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="col-xl-2"></div>
            </div>
        </div>
    )
}