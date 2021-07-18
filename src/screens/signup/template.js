import React from 'react'
import './styling.css'
import { Link } from 'react-router-dom'


export const template = component =>
{
    // template dynamic content
    var name, email, username, password, confirmPassword, profilePicture, openingDays, openingHours
    if (component.state.isNameVerified)
        name = <div class="d-flex flex-column required_message_container">
            <input type="text" name="name" class="nbs_input" placeholder="name e.g Pizza Hut" onChange={component.handleValue} />
        </div>
    else
        name = <div class="d-flex flex-column required_message_container">
            <input type="text" name="name" class="nbs_input_red" placeholder="name e.g Pizza Hut" onChange={component.handleValue} />
            <span class="required_message">*Name is required</span>
        </div>

    if (component.state.isEmailVerified)
        email = <div class="d-flex flex-column required_message_container">
            <input type="text" name="email" class="nbs_input" placeholder="email" onChange={component.handleValue}/>
        </div>
    else
        email = <div class="d-flex flex-column required_message_container">
            <input type="text" name="email" class="nbs_input_red" placeholder="email" onChange={component.handleValue}/>
            <span class="required_message">{component.state.emailVerificationMessage}</span>
        </div>

    if (component.state.isUsernameVerified)
        username = <div class="d-flex flex-column required_message_container">
            <input type="text" name="username" class="nbs_input" placeholder="username" onChange={component.handleValue} />
        </div>
    else
        username = <div class="d-flex flex-column required_message_container">
            <input type="text" name="username" class="nbs_input_red" placeholder="username" onChange={component.handleValue} />
            <span class="required_message">{component.state.usernameVerificationMessage}</span>
        </div>

    if (component.state.isPasswordVerified)
        password = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input align-items-center">
                <input type={component.state.passwordType} class="nbs_input_internal" placeholder="password" name="password" onChange={component.handleValue} />
                <img src={component.state.passwordIcon} id="password_icon" alt="show_password_icon" onClick={component.handlePasswordIcon} />
            </div>
        </div>
    else
    {
        password = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input_red align-items-center">
                <input type={component.state.passwordType} class="nbs_input_internal" placeholder="password" name="password" onChange={component.handleValue} />
                <img src={component.state.passwordIcon} id="password_icon" alt="show_password_icon" onClick={component.handlePasswordIcon} />
            </div>
            <span class="required_message">*Password is required</span>
        </div>
        if (!component.state.isPasswordValid)
            password = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input_red align-items-center">
                <input type={component.state.passwordType} class="nbs_input_internal" placeholder="password" name="password" onChange={component.handleValue} />
                <img src={component.state.passwordIcon} id="password_icon" alt="show_password_icon" onClick={component.handlePasswordIcon} />
            </div>

            <ui class="required_message">
                <li id="eight_character_pr">Password must be eight characters long</li>
                <li id="lower_letter_pr">Password must contain at least one lower case letter</li>
                <li id="upper_letter_pr">Password must contain at least one upper case letter</li>
                <li id="number_pr">Password must contain at least one number</li>
                <li id="special_character_pr">Password must contain at least one special character</li>
            </ui>
        </div>
    }

    if (component.state.isConfirmPasswordVerified)
        confirmPassword = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input align-items-center">
                <input 
                    type={component.state.confirmPasswordType} 
                    class="nbs_input_internal"
                    placeholder="confirm password" 
                    name="confirmPassword" 
                    onChange={component.handleValue}
                />
                <img src={component.state.confirmPasswordIcon} id="password_icon" alt="show_password_icon" onClick={component.handleConfirmPasswordIcon} />
            </div>
        </div>
    else
        confirmPassword = <div class="d-flex flex-column required_message_container">
            <div class="d-flex nbs_input_red align-items-center">
                <input 
                    type={component.state.confirmPasswordType} 
                    class="nbs_input_internal"
                    placeholder="confirm password" 
                    name="confirmPassword" 
                    onChange={component.handleValue}
                />
                <img src={component.state.confirmPasswordIcon} id="password_icon" alt="show_password_icon" onClick={component.handleConfirmPasswordIcon} />
            </div>
            <span class="required_message">{component.state.confirmPasswordVerificationMessage}</span>
        </div>

    if (component.state.isProfilePictureVerified)
        profilePicture = <div class="d-flex flex-column required_message_container">
            <div id="upload_image_container" class="d-flex flex-column align-items-start">
                <label id="upload_image_label">Upload profile picture</label>
                <input type="file" name="profilePicture" onChange={component.handleProfilePicture} />
            </div>
        </div>
    else
        profilePicture = <div class="d-flex flex-column required_message_container">
            <div id="upload_image_container_red" class="d-flex flex-column align-items-start">
                <label id="upload_image_label">Upload profile picture</label>
                <input type="file" name="profilePicture" onChange={component.handleProfilePicture} />
            </div>
            <span class="required_message">{component.state.profilePictureVerificationMessage}</span>
        </div> 

    if (component.state.displayOpeningDays)
    {
        var openingDaysContent = <div id="opening_days_sub_container" class="d-flex flex-row flex-wrap">
            <div id="left_checkbox">
                <label id="checkbox_label">Mon</label>

                <input type="checkbox" name="openingDayMon" onChange={component.handleOpeningDays} value={component.state.openingDayMon} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Tue</label>

                <input type="checkbox" name="openingDayTue" onChange={component.handleOpeningDays} checked={component.state.openingDayTue} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Wed</label>

                <input type="checkbox" name="openingDayWed" onChange={component.handleOpeningDays} checked={component.state.openingDayWed} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Thu</label>

                <input type="checkbox" name="openingDayThu" onChange={component.handleOpeningDays} checked={component.state.openingDayThu} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Fri</label>

                <input type="checkbox" name="openingDayFri" onChange={component.handleOpeningDays} checked={component.state.openingDayFri} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Sat</label>

                <input type="checkbox" name="openingDaySat" onChange={component.handleOpeningDays} value={component.state.openingDaySat} />
            </div>

            <div id="left_checkbox">
                <label id="checkbox_label">Sun</label>

                <input type="checkbox" name="openingDaySun" onChange={component.handleOpeningDays} checked={component.state.openingDaySun} />
            </div>
        </div>
        openingDays = <div class="d-flex flex-column required_message_container">
            <div id="opening_days_container">
                <label id="opening_days_label">Select opening days:</label>

                {openingDaysContent}
            </div>
        </div>

        if (!component.state.isOpeningDaysVerified)
            openingDays = <div class="d-flex flex-column required_message_container">
                <div id="opening_days_container_red">
                    <label id="opening_days_label">Select opening days:</label>

                    {openingDaysContent}
                </div>

                <span class="required_message">{component.state.openingDaysVerificationMessage}</span>
            </div>
    }
    else
        openingDays = <div />

    // handle opening hours
    if (component.state.displayOpeningHours)
    {
        openingHours = <div class="d-flex flex-column required_message_container">
            <div id="opening_hours_container">
                <label id="opening_hours_label">Select opening hours:</label>

                <div id="opening_hours_sub_container" class="d-flex flex-row">
                    <div id="from_hours_container">
                        <label id="opening_hours_sub_label">From:</label>

                        <input type="time" name="openingHoursFrom" onChange={component.handleValue} value={component.state.openingHoursFrom} />
                    </div>

                    <div id="to_hours_container">
                        <label id="opening_hours_sub_label">To:</label>

                        <input type="time" name="openingHoursTo" onChange={component.handleValue} value={component.state.openingHoursTo} />
                    </div>
                </div>
            </div>
        </div>

        if (!component.state.isOpenHoursFromVerified || !component.state.isOpenHoursToVerified)
            openingHours = <div class="d-flex flex-column required_message_container">
                <div id="opening_hours_container_red">
                    <label id="opening_hours_label">Select opening hours:</label>

                    <div id="opening_hours_sub_container" class="d-flex flex-row">
                        <div id="from_hours_container">
                            <label id="opening_hours_sub_label">From:</label>

                            <input type="time" name="openingHoursFrom" onChange={component.handleValue} value={component.state.openingHoursFrom} />
                        </div>

                        <div id="to_hours_container">
                            <label id="opening_hours_sub_label">To:</label>

                            <input type="time" name="openingHoursTo" onChange={component.handleValue} value={component.state.openingHoursTo} />
                        </div>
                    </div>
                </div>
                <span class="required_message">{component.state.openHoursVerificationMessage}</span>
            </div>
    }
    else
        openingHours = <div /> 


    // template content
    return(
        <div class="container">
            <div class="row h-100">
                <div class="col-xl-1" id="signup_empty_column_top"></div>

                <div class="col-xl-10 my-auto" id="signup_main_container">
                    <div class="row h-100">
                        <div class="col-xl-4 d-flex flex-column align-items-center justify-content-center">
                            <img src={require("../../assets/images/icon.png")} id="main_image" alt="main_image.png"/>

                            <span id="main_image_text">Online Food Depot</span>
                        </div>

                        <div class="col-xl-8">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <h2 id="merchant_portal">Merchant Signup Portal</h2>
                        
                                {name}

                                <input type="text" name="titleText" class="nbs_input" placeholder="title text"/>

                                {email}

                                {username}

                                {password}

                                {confirmPassword}

                                {profilePicture}

                                <div id="checkboxes_container" class="d-flex">
                                    <div id="left_checkbox" class="d-flex align-items-center">
                                        <label id="checkbox_label">Open All Week</label>

                                        <input type="checkbox" name="openAllWeek" onChange={component.handleOpenAllWeekBtn} />
                                    </div>

                                    <div id="right_checkbox" class="d-flex align-items-center">
                                        <label id="checkbox_label">Open All Day</label>

                                        <input type="checkbox" onChange={component.handleOpenAllDayBtn} />
                                    </div>
                                </div>

                                {openingHours}

                                {openingDays}

                                <input type="button" id="submit_btn" value="Signup" onClick={component.signup} />

                                <Link to="/login" id="login_btn">
                                    <span id="login_text">Already have an account. Login?</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-1" id="signup_empty_column_bottom"></div>
            </div>
        </div>
    )
}