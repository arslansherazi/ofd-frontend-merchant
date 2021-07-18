import React, { Component } from 'react'
import { template } from './template.js'
import CommonHelpers from '../../common/common_helpers'
import { SIGNUP_ENDPOINT, MERCHANT_USER_TYPE, ALLOWED_IMAGE_EXTENSIONS, ALLOWED_IMAGE_SIZE_IN_MBS } from '../../common/constants'
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


class Signup extends Component
{
    state = {
        name: '',
        titleText: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
        openAllWeek: false,
        openAllDay: false,
        openingHoursFrom: '',
        openingHoursTo: '',
        passwordIcon: require('../../assets/images/show_password.png'),
        passwordType: 'password',
        confirmPasswordIcon: require('../../assets/images/show_password.png'),
        confirmPasswordType: 'password',
        emailVerificationMessage: '*Email is required',
        usernameVerificationMessage: '*Username is required',
        confirmPasswordVerificationMessage: '*Please confirm password',
        profilePictureVerificationMessage: '*Profile picture is required',
        openHoursVerificationMessage: '*Please select opening hours',
        openingDaysVerificationMessage: '*Please select opening days',
        displayOpeningDays: true,
        displayOpeningHours: true,
        openingDayMon: false,
        openingDayTue: false,
        openingDayWed: false,
        openingDayThu: false,
        openingDayFri: false,
        openingDaySat: false,
        openingDaySun: false,
        // data validation flags
        isNameVerified: true,
        isTitleTextVerified: true,
        isEmailVerified: true,
        isUsernameVerified: true,
        isPasswordVerified: true,
        isConfirmPasswordVerified: true,
        isProfilePictureVerified: true,
        isOpenHoursFromVerified: true,
        isOpenHoursToVerified: true,
        isOpeningDaysVerified: true,
        isPasswordValid: true
    }

    componentDidMount() 
    {
        document.body.style.backgroundColor = '#D0312D'
    }


    signup = () =>
    {
        this.setState({
            isNameVerified: true,
            isEmailVerified: true,
            isUsernameVerified: true,
            isPasswordVerified: true,
            isConfirmPasswordVerified: true,
            isProfilePictureVerified: true,
            isOpenHoursFromVerified: true,
            isOpenHoursToVerified: true,
            isOpeningDaysVerified: true,
            isPasswordValid: true
        })
        // handle name
        if (this.state.name === '')
            this.setState({isNameVerified: false})

        // handle email
        if (this.state.email === '')
            this.setState({isEmailVerified: false})
        else if (!this.validateEmail(this.state.email))
            this.setState({isEmailVerified: false, emailVerificationMessage: '*Enter a valid email'})

        // handle username
        if (this.state.username === '')
            this.setState({isUsernameVerified: false})

        // handle password
        if (this.state.password === '')
            this.setState({isPasswordVerified: false})
        else if (!this.validatePassword(this.state.password))
            this.setState({isPasswordVerified: false, isPasswordValid: false})

        // handle confirm password
        if (this.state.confirmPassword === '')
            this.setState({isConfirmPasswordVerified: false})
        else if (this.state.password !== '' && this.state.confirmPassword !== this.state.password)
            this.setState({isConfirmPasswordVerified: false, confirmPasswordVerificationMessage: '*Password did not match'})
        
        // handle profile picture
        if (this.state.profilePicture === '')
            this.setState({isProfilePictureVerified: false})
        else 
        {
            var profileImgeSizeInMBs = Math.floor(this.state.profilePicture.size / 1024 / 1024)
            var profileImgeName = this.state.profilePicture.name.split('.')
            var profileImgeExtension = profileImgeName[profileImgeName.length-1]
            if (!ALLOWED_IMAGE_EXTENSIONS.includes(profileImgeExtension))
                this.setState({isProfilePictureVerified: false, profilePictureVerificationMessage: '*Allowed formats are jpg, jpeg and png'})
            else if (profileImgeSizeInMBs > ALLOWED_IMAGE_SIZE_IN_MBS)
                this.setState({isProfilePictureVerified: false, profilePictureVerificationMessage: '*Maximum allowed file size is 2MB'})
        }

        //handle opening hours
        if (!this.state.openAllDay)
        {
            if (this.state.openingHoursFrom === '')
                this.setState({isOpenHoursFromVerified: false})
            if (this.state.openingHoursTo === '')
                this.setState({isOpenHoursToVerified: false})
        }

        //handle opening days
        if (!this.state.openAllWeek)
            if (
                !this.state.openingDayMon && !this.state.openingDayTue && !this.state.openingDayWed && !this.state.openingDayThu
                && !this.state.openingDayFri && !this.state.openingDaySat && !this.state.openingDaySun
            )
                this.setState({isOpeningDaysVerified: false})


        if (this.state.isNameVerified && this.state.isEmailVerified && this.state.isPasswordVerfied && 
            this.state.isConfirmPasswordVerified && this.state.isProfilePictureVerified)
        {
            const params = {
                name: this.state.name,
                title_text: this.state.titleText,
                username: this.state.username,
                password: this.state.password,
                user_type: MERCHANT_USER_TYPE
            }
            // const result = CommonHelpers.callApi(LOGIN_ENDPOINT, 'POST', params)
            // console.log(result)
        }
    }

    handleProfilePicture = event => 
    {
        this.setState({profilePicture: event.target.files[0]}, () => {
            if (this.state.profilePicture !== '' && !this.state.isProfilePictureVerified)
                this.setState({isProfilePictureVerified: true})
        })
    }

    handleValue = event  =>
    {
        const { name, value } = event.target
        this.setState({[name]: value}, () => {
            if (this.state.name !== '' && !this.state.isNameVerified)
                this.setState({isNameVerified: true})
            if (this.state.username !== '' && !this.state.isUsernameVerified)
                this.setState({isUsernameVerified: true})
            if (this.state.email !== '' && !this.state.isEmailVerified)
                this.setState({isEmailVerified: true})
            if (this.state.password !== '' && (!this.state.isPasswordVerified || !this.state.isPasswordValid))
                this.setState({isPasswordVerified: true, isPasswordValid: true})
            if (this.state.confirmPassword !== '' && !this.state.isConfirmPasswordVerified)
                this.setState({isConfirmPasswordVerified: true})
            if (this.state.profilePicture !== '' && !this.state.isProfilePictureVerified)
                this.setState({isProfilePictureVerified: true})
            if (
                (this.state.openingHoursFrom !== '' || this.state.openingHoursTo) !== '' && 
                (!this.state.isOpenHoursFromVerified || !this.state.isOpenHoursToVerified)
            )
                this.setState({isOpenHoursFromVerified: true, isOpenHoursToVerified: true})
        })
    }

    handlePasswordIcon = () =>
    {
        if (this.state.passwordIcon === require('../../assets/images/show_password.png'))
            this.setState({passwordIcon: require('../../assets/images/hide_password.png'), passwordType: 'text'})
        else
            this.setState({passwordIcon: require('../../assets/images/show_password.png'), passwordType: 'password'})
    }

    handleConfirmPasswordIcon = () =>
    {
        if (this.state.confirmPasswordIcon === require('../../assets/images/show_password.png'))
            this.setState({confirmPasswordIcon: require('../../assets/images/hide_password.png'), confirmPasswordType: 'text'})
        else
            this.setState({confirmPasswordIcon: require('../../assets/images/show_password.png'), confirmPasswordType: 'password'})
    }

    validatePassword = password => 
    {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return re.test(String(password).toLowerCase())
    }

    validateEmail = email => 
    {
        const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }

    handleOpenAllWeekBtn = event =>
    {
        this.setState({openAllWeek: event.target.checked, displayOpeningDays: !event.target.checked})
        if (event.target.checked)
            this.setState({isOpeningDaysVerified: true})
    }

    handleOpeningDays = event =>
    {
        const { name, checked } = event.target
        this.setState({[name]: checked}, () => {
            if (
                (this.state.openingDayMon || this.state.openingDayTue || this.state.openingDayWed || this.state.openingDayThu
                || this.state.openingDayFri || this.state.openingDaySat || this.state.openingDaySun) && !this.state.isOpeningDaysVerified
            )
                this.setState({isOpeningDaysVerified: true})
        })    
    }

    handleOpenAllDayBtn = event =>
    {
        this.setState({
            openAllDay: event.target.checked, displayOpeningHours: !event.target.checked
        })
        if (event.target.checked)
            this.setState({isOpenHoursFromVerified: true, isOpenHoursToVerified: true})
    }

    render() 
    {
        if (this.props.authData.isLoggedIn)
            return <Redirect to='/' />
        else
            return template(this)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
