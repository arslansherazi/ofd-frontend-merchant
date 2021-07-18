import React from 'react'
import './styling.css'
import Sidebar from "react-sidebar"


export const template = component =>
{
    var sideBarContent = <div class="d-flex flex-column" id="sidebar_menu_items_container">
        <div 
            class="d-flex sidebar_item align-items-center"             
            onMouseOver={() => component.changeIcon('ORDER_HISTORY_RED')} 
            onMouseOut={() => component.changeIcon('ORDER_HISTORY_BLACK')} 
        >
            <img src={component.state.orderHistoryIcon} class="sidebar_item_image" alt="sidebar_item_image" />
            <span class="sidebar_item_text">Orders History</span>
        </div>

        <div 
            class="d-flex sidebar_item align-items-center sidebar_item_secondary"             
            onMouseOver={() => component.changeIcon('MENU_RED')} 
            onMouseOut={() => component.changeIcon('MENU_BLACK')} 
        >
            <img src={component.state.menuIcon} class="sidebar_item_image" alt="sidebar_item_image" />
            <span class="sidebar_item_text">Menus</span>
        </div>

        <div 
            class="d-flex sidebar_item align-items-center sidebar_item_secondary"             
            onMouseOver={() => component.changeIcon('SETTINGS_RED')} 
            onMouseOut={() => component.changeIcon('SETTINGS_BLACK')} 
        >
            <img src={component.state.settingsIcon} class="sidebar_item_image" alt="sidebar_item_image" />
            <span class="sidebar_item_text">Settings</span>
        </div>

        <div 
            class="d-flex sidebar_item align-items-center sidebar_item_secondary"             
            onMouseOver={() => component.changeIcon('LOGOUT_RED')} 
            onMouseOut={() => component.changeIcon('LOGOUT_BLACK')} 
            onClick={component.logout}
        >
            <img src={component.state.logoutIcon} class="sidebar_item_image" alt="sidebar_item_image" />
            <span class="sidebar_item_text">Logout</span>
        </div>

        <div class="d-flex align-items-center justify-content-center" id="version_conatiner">
            <span class="version_text">Online Food Depot&copy; v1.0.0</span>
        </div>
    </div>
    
    // top bar content
    return (
        <div class="container-fluid" id="top_bar_main_container" style={component.state.topBarMainContainerStyle}>
            <div class="row fixed-top" id="top_bar">
                <div class="col-sm-4 d-flex align-items-center">
                    <img 
                        src={require("../../assets/images/menu_button.png")} 
                        id="menu_button" 
                        alt="menu_btn" 
                        onClick={component.handleSideBar}
                    />

                    <span id="merchant_name">{component.props.authData.merchantName}</span>
                </div>
                <div class="col-sm-4">
                    <div class="d-flex flex-column align-items-center justify-content-center" id="ofd_logo_container">
                        <img 
                            src={require("../../assets/images/ofd_icon_white.png")} 
                            id="ofd_icon_white" 
                            alt="ofd_icon_white" 
                            style={component.state.sideBarIconStyle} 
                        />
                        <span id="top_bar_title_text">Online Food Depot</span>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-row-reverse align-items-center">
                    <span id="logout_btn" onClick={component.logout}>Logout</span>
                </div>
            </div>

            <Sidebar
                sidebar={sideBarContent}
                open={component.state.displaySideBar}
                styles={{ sidebar: component.state.sideBarStyle}}
            >
            </Sidebar>
        </div>
    )
}