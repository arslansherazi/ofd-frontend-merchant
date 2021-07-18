import {Component} from 'react'
import './styling.css'
import { template } from './template.js'
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


class TopBar extends Component
{
    state = {
        orderHistoryIcon: require("../../assets/images/orders_history_black.png"),
        logoutIcon: require("../../assets/images/logout_black.png"),
        settingsIcon: require("../../assets/images/settings_black.png"),
        menuIcon: require("../../assets/images/menu_black.png"),
        displaySideBar: false,
        sideBarStyle: { 
            background: "white",
            width: "18%",
            padding: "10px",
            display: "flex",
            height: "100%"
        }
    }

    componentDidMount() 
    {    
        this.checkWidth = () => 
        {
            const mediaQuery1 = window.matchMedia('(max-width: 500px)').matches;
            const mediaQuery2 = window.matchMedia('(min-width: 501px)').matches;
            if (mediaQuery1)
                this.setState({
                    sideBarStyle: { 
                        background: "white",
                        width: "300px",
                        padding: "10px",
                        display: "flex",
                        height: "100%"
                    }
                })
            else if (mediaQuery2)
                this.setState({
                    sideBarStyle: { 
                        background: "white",
                        width: "300px",
                        padding: "10px",
                        display: "flex",
                        height: "100%"
                    }
                })

            else
                this.setState({
                    sideBarStyle: { 
                        background: "white",
                        width: "18%",
                        padding: "10px",
                        display: "flex",
                        height: "100%"
                    }
                })
        };
    
        this.checkWidth()
        window.addEventListener("resize", this.checkWidth)
    }
    
    componentWillUnmount() 
    {
        window.removeEventListener("resize", this.checkWidth)
    }

    logout = () =>
    {
        this.props.logout()
    }

    handleSideBar = () =>
    {
        this.setState({displaySideBar: true})
        if (this.state.displaySideBar)
            this.setState({displaySideBar: false})
    }

    changeIcon = type =>
    {
        switch(type)
        {
            case 'ORDER_HISTORY_BLACK':
                this.setState({orderHistoryIcon: require("../../assets/images/orders_history_black.png")})
                break
            case 'ORDER_HISTORY_RED':
                this.setState({orderHistoryIcon: require("../../assets/images/orders_history_red.png")})
                break
            case 'LOGOUT_BLACK':
                this.setState({logoutIcon: require("../../assets/images/logout_black.png")})
                break
            case 'LOGOUT_RED':
                this.setState({logoutIcon: require("../../assets/images/logout_red.png")})
                break
            case 'SETTINGS_BLACK':
                this.setState({settingsIcon: require("../../assets/images/settings_black.png")})
                break
            case 'SETTINGS_RED':
                this.setState({settingsIcon: require("../../assets/images/settings_red.png")})
                break
            case 'MENU_BLACK':
                this.setState({menuIcon: require("../../assets/images/menu_black.png")})
                break
            case 'MENU_RED':
                this.setState({menuIcon: require("../../assets/images/menu_red.png")})
                break
            default:
                return null
        }
    }

    render() 
    {
        return template(this)
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
