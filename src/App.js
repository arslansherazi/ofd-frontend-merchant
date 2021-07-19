import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './screens/login/component'
import Signup from './screens/signup/component'
import Home from './screens/home/component'
import ForgotPassword from './screens/forgot_password/component'


export default class Router extends Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/forgot/password' component={ForgotPassword} />
                <Route exact path='/' component={Home} />
            </BrowserRouter>
        )
    }
}