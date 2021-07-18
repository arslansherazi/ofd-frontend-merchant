import React, { Component } from 'react'
import { template } from './template.js'
import CommonHelpers from '../../common/common_helpers'
import { 
    LOGIN_ENDPOINT, MERCHANT_USER_TYPE, SUCCESS_STATUS_CODE, USERNAME_REQUIRED_MESSAGE, PASSWORD_REQUIRED_MESSAGE 
} from '../../common/constants'
import { login } from '../../actions'
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
        login: (isLoggedIn, authToken, merchantName) =>
            dispatch(login(isLoggedIn, authToken, merchantName))
    }
}


class Login extends Component
{
    state = {
        username: '',
        password: '',
        isUsernameVerified: true,
        isPasswordVerified: true,
        passwordIcon: require("../../assets/images/show_password.png"),
        passwordType: 'password',
        usernameVerificationMessage: USERNAME_REQUIRED_MESSAGE,
        passwordVerificationMessage: PASSWORD_REQUIRED_MESSAGE
    }

    componentDidMount() 
    {
        document.body.style.backgroundColor = '#D0312D'
    }

    login = () => 
    {               
        if (this.state.username === '' || this.state.password === '')
        {
            this.setState({
                isUsernameVerified: !(this.state.username === ''), 
                usernameVerificationMessage: USERNAME_REQUIRED_MESSAGE,
                isPasswordVerified: !(this.state.password === ''),
                passwordVerificationMessage: PASSWORD_REQUIRED_MESSAGE
            })
        }
        else
            this.callLoginApi()
    }

    callLoginApi = () =>
    {
        const params = {
            username: this.state.username,
            password: this.state.password,
            user_type: MERCHANT_USER_TYPE
        }
        CommonHelpers.callApiAxios(LOGIN_ENDPOINT, 'POST', params).then(response => 
        {
            console.log(response)
            if (response.status_code === SUCCESS_STATUS_CODE)
            {
                const isLoggedIn = true
                const authToken = response.data.auth_token
                const merchantName = response.data.name
                this.props.login(isLoggedIn, authToken, merchantName)
                this.props.history.push('/')
            }
            else 
            {
                if (response.message === 'Password is incorrect')
                    this.setState({isPasswordVerified: false, passwordVerificationMessage: response.message})
                else if (response.message === 'User does not exist in system')
                    this.setState({isUsernameVerified: false, usernameVerificationMessage: response.message})
            }
        })
    }

    handleValue = event => 
    {
        const { name, value } = event.target
        this.setState({[name]: value}, () => 
        {
            if (name === 'username' && this.state.username !== '' && !this.state.isUsernameVerified)
                this.setState({isUsernameVerified: true})
            if (name === 'password' && this.state.password !== '' && !this.state.isPasswordVerified)
                this.setState({isPasswordVerified: true})
        })
    }

    handleInputs = () =>
    {
        console.log(this.state.username, this.state.password)

    }

    handlePasswordIcon = () =>
    {
        if (this.state.passwordIcon === require("../../assets/images/show_password.png"))
            this.setState({passwordIcon: require("../../assets/images/hide_password.png"), passwordType: "text"})
        else
            this.setState({passwordIcon: require("../../assets/images/show_password.png"), passwordType: "password"})
    }

    render() 
    {
        if (this.props.authData.isLoggedIn)
            return <Redirect to='/'  />
        else
            return template(this)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)