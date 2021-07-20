import React, { Component } from 'react'
import { template } from './template.js'
import CommonHelpers from '../../common/common_helpers'
import { 
    SEND_EMAIL_ENDPOINT, MERCHANT_USER_TYPE, EMAIL_REQUIRED_MESSAGE, ENCRYPTION_DISABLE_KEY, SUCCESS_STATUS_CODE, 
    VALIDATE_EMAIL_ENDPOINT, ERROR_MESSAGE_TITLE, SUCCESS_MESSAGE_TITLE
} from '../../common/constants'
import { connect } from 'react-redux'
import  { Redirect } from 'react-router-dom'

function mapStateToProps(state)
{
    return {
        authData: state.auth
    }
}

function mapDispatchToProps(dispatch)
{
    return {
    }
}


class ForgotPassword extends Component
{
    state = {
        email: '',
        isEmailVerified: true,
        emailVerificationMessage: EMAIL_REQUIRED_MESSAGE,
        apiMessageHeading: '',
        apiMessage: '',
        isApiMessageContainerVisible: false
    }

    componentDidMount() 
    {
        document.body.style.backgroundColor = '#D0312D'
    }

    changePassword = () => 
    {               
        if (this.state.email === '')
            this.setState({
                isEmailVerified: false, 
                emailVerificationMessage: EMAIL_REQUIRED_MESSAGE
            })
        else
            this.validateEmail()
    }

    validateEmail = () =>
    {
        const params = {
            email: this.state.email,
            user_type: MERCHANT_USER_TYPE
        }
        CommonHelpers.callApiAxios(VALIDATE_EMAIL_ENDPOINT, 'POST', params).then(response => 
        {
            if (response.status_code === SUCCESS_STATUS_CODE)
            {
               if (response.data.user_exists)
                    this.callForgotPasswordEmailApi()
               else
                    this.setState({
                        isEmailVerified: false, 
                        emailVerificationMessage: response.data.message
                    })
            }
            else
                this.setState({
                    isApiMessageContainerVisible: true, 
                    apiMessage: response.message, 
                    apiMessageHeading: ERROR_MESSAGE_TITLE
                })
        })
    }

    callForgotPasswordEmailApi = () =>
    {
        const params = {
            email: this.state.email,
            is_forgot_password_code: true,
            user_type: MERCHANT_USER_TYPE,
            encryption_disable_key: ENCRYPTION_DISABLE_KEY
        }
        const authToken = this.props.authData.authToken
        CommonHelpers.callApiAxios(SEND_EMAIL_ENDPOINT, 'POST', params, authToken).then(response => 
        {
            if (response.status_code === SUCCESS_STATUS_CODE)
                this.setState({
                    isApiMessageContainerVisible: true, 
                    apiMessage: response.data.message, 
                    apiMessageHeading: SUCCESS_MESSAGE_TITLE
                })
            else
            {
                this.setState({
                    isApiMessageContainerVisible: true, 
                    apiMessage: response.message, 
                    apiMessageHeading: ERROR_MESSAGE_TITLE
                })
            }
        })
    }

    handleValue = event => 
    {
        const { name, value } = event.target
        this.setState({[name]: value}, () => 
        {
            if (name === 'email' && this.state.email !== '' && !this.state.isEmailVerified)
                this.setState({isEmailVerified: true})
        })
    }

    render() 
    {
        if (this.props.authData.isLoggedIn)
            return <Redirect to='/'  />
        else
            return template(this)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)