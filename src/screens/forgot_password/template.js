import React from 'react'
import '../login/styling.css'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'


export const template = component =>
{
    // template dynamic content
    var emailInput
    if (component.state.isEmailVerified)
        emailInput = <div class="d-flex flex-column required_message_container">
            <input type="text" class="nbs_input" placeholder="email" name="email" onChange={component.handleValue}/>
        </div>
    else
        emailInput = <div class="d-flex flex-column required_message_container">
            <input type="text" class="nbs_input_red" placeholder="email" name="email" onChange={component.handleValue}/>
            <span class="required_message">*{component.state.emailVerificationMessage}</span>
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
                            <h2 id="merchant_portal">Merchant Forgot Password Portal</h2>

                            {emailInput}

                            <input type="button" id="submit_btn" value="Change Password" onClick={component.changePassword}/>

                            <Link to="/signup" id="signup_btn" onClick={component.props.history.goBack}>
                                <span id="login_text">&#8592; Go Back</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="col-xl-2"></div>
            </div>

            <Modal
                title={component.state.apiMessageHeading}
                centered
                visible={component.state.isApiMessageContainerVisible}
                onOk={() => component.setState({isApiMessageContainerVisible: false})}
                onCancel={() => component.setState({isApiMessageContainerVisible: false})}
                width={400}
            >
                <h6>{component.state.apiMessage}</h6>
            </Modal>
        </div>
    )
}
