import { Component } from 'react'
import { template } from './template.js'
import CommonHelpers from '../../common/common_helpers'
import { LOGIN_ENDPOINT, MERCHANT_USER_TYPE } from '../../common/constants'


export default class Login extends Component
{
    state = {
        username: '',
        password: ''
    }

    login = () => 
    {
        const params = {
            username: this.state.username,
            password: this.state.password,
            user_type: MERCHANT_USER_TYPE
        }
        const result = CommonHelpers.call_api(LOGIN_ENDPOINT, 'POST', params)
        console.log(result)
    }

    handle_value = event => 
    {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() 
    {
        return template(this)
    }
}