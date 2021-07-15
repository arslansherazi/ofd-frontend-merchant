import { Component } from 'react'
import { template } from './template.js'
import CommonHelpers from '../../common/common_helpers'
import { LOGIN_ENDPOINT, MERCHANT_USER_TYPE } from '../../common/constants'


export default class Login extends Component
{
    state = {
        username: '',
        password: '',
        isUsernameVerified: true,
        isPasswordVerified: true,
        passwordIcon: require("../../assets/images/show_password.png"),
        passwordType: "password"
    }

    login = () => 
    {
        this.setState({isUsernameVerified: true, isPasswordVerified: true})
        if (this.state.username === '')
            this.setState({isUsernameVerified: false})
        if (this.state.password === '')
            this.setState({isPasswordVerified: false})
        if (this.state.isUsernameVerified && this.state.isPasswordVerified)
        {
            const params = {
                username: this.state.username,
                password: this.state.password,
                user_type: MERCHANT_USER_TYPE
            }
            const result = CommonHelpers.callApi(LOGIN_ENDPOINT, 'POST', params)
            console.log(result)
        }
    }

    handleValue = event => 
    {
        const { name, value } = event.target
        this.setState({[name]: value}, () => {
            if (this.state.username !== '' && !this.state.isUsernameVerified)
                this.setState({isUsernameVerified: true})
            if (this.state.password !== '' && !this.state.isPasswordVerified)
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
        return template(this)
    }
}