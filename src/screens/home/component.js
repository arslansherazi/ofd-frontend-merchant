import React, { Component } from 'react'
import { template } from './template.js'
import  { Redirect } from 'react-router-dom'
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
    }
}


class Home extends Component
{
    componentDidMount() 
    {
        document.body.style.backgroundColor = 'white'
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
