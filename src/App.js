import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './screens/login/component'
import Signup from './screens/signup/component'
import Home from './screens/home/component'


export default class Router extends Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/' component={Home} />
            </BrowserRouter>
        )
    }
}