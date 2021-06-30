import React, {Component} from 'react'
import './styling.css'
import { Link } from 'react-router-dom'



export class Template extends Component
{
    render ()
    {
        return(
            <div className="container">
                <div className="row h-100">
                    <div className="col-xl-1"></div>

                    <div className="col-xl-10 my-auto" id="signup_main_container">
                        <div className="row h-100">
                            <div className="col-xl-4 d-flex flex-column align-items-center justify-content-center">
                                <img src={require("../../assets/images/icon.png")} id="main_image" alt="main_image.png"/>

                                <span id="main_image_text">Online Food Depot</span>
                            </div>

                            <div className="col-xl-8">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <h2 id="merchant_portal">Merchant Signup Portal</h2>

                                    <input type="text" className="nbs_input" placeholder="name e.g Pizza Hut"/>

                                    <input type="text" className="nbs_input" placeholder="title text"/>

                                    <input type="text" className="nbs_input" placeholder="email"/>

                                    <input type="text" className="nbs_input" placeholder="username"/>

                                    <input type="password" className="nbs_input" placeholder="password"/>

                                    <input type="password" className="nbs_input" placeholder="confirm password"/>

                                    <div id="upload_image_container" className="d-flex flex-column align-items-start">
                                        <label id="upload_image_label">Upload profile picture</label>
                                        
                                        <input type="file" />
                                    </div>

                                    <div id="checkboxes_container" className="d-flex">
                                        <div id="left_checkbox" className="d-flex align-items-center">
                                            <label id="checkbox_label">Open All Week</label>

                                            <input type="checkbox" />
                                        </div>

                                        <div id="right_checkbox" className="d-flex align-items-center">
                                            <label id="checkbox_label">Open All Day</label>

                                            <input type="checkbox" />
                                        </div>
                                    </div>

                                    <div id="opening_hours_container">
                                        <label id="opening_hours_label">Select opening hours:</label>

                                        <div id="opening_hours_sub_container" className="d-flex flex-row">
                                            <div id="from_hours_container">
                                                <label id="opening_hours_sub_label">From:</label>

                                                <input type="time" />
                                            </div>

                                            <div id="to_hours_container">
                                                <label id="opening_hours_sub_label">To:</label>

                                                <input type="time" />
                                            </div>
                                        </div>
                                    </div>

                                    <div id="opening_days_container">
                                        <label id="opening_days_label">Select opening days:</label>

                                        <div id="opening_days_sub_container" className="d-flex flex-row flex-wrap">
                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Mon</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Tue</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Wed</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Thu</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Fri</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Sat</label>

                                                <input type="checkbox" />
                                            </div>

                                            <div id="left_checkbox">
                                                <label id="checkbox_label">Sun</label>

                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="button" id="submit_btn" value="Signup" />

                                    <Link to="/" id="login_btn">
                                        <span id="login_text">Already have an account. Login?</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-1"></div>
                </div>
            </div>
        )
    }
}