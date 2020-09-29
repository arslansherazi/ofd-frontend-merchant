import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './screens/login/component'
import Signup from './screens/signup/component'


export default class Router extends Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Route path='/' exact component={Login} />

                <Route path='/signup' component={Signup} />
            </BrowserRouter>
        )
    }
}