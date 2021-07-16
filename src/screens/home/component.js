import React, { Component } from 'react'
import { template } from './template.js'
import  { Redirect } from 'react-router-dom'
import { logout } from '../../actions'
import { connect } from 'react-redux'

function mapStateToProps(state)
{
    return {
        authData: state.auth
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        logout: () =>
            dispatch(logout())
    }
}


class Home extends Component
{
    logout = () =>
    {
        this.props.logout()
        this.props.history.push('/login')
    }

    render()
    {
        if (!this.props.authData.isLoggedIn)
            return <Redirect to='login' />
        else
            return template(this)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
