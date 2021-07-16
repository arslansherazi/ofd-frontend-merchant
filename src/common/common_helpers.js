import { Component } from 'react'
import { REQUEST_CONTENT_TYPE, API_BASE_URL, SOMETHING_WENT_WRONG, BASIC_AUTH_CREDENTIALS, ENCRYPTION_DISABLE_KEY } from '../common/constants'

const axios = require('axios')


export default class CommonHelpers extends Component 
{
    static callApi = async (endpoint, method, params, authToken=null) =>
    {
        let authorization = 'Basic ' + Buffer.from(BASIC_AUTH_CREDENTIALS).toString('base64')
        if (authToken)
            authorization = 'Bearer ' + authToken
        params.encryption_disable_key = ENCRYPTION_DISABLE_KEY
        return fetch(API_BASE_URL + endpoint, 
        {
            method: method,
            body: JSON.stringify(params),
            headers: {
                'Content-Type': REQUEST_CONTENT_TYPE,
                'Authorization': authorization
            }
        })
        .then(response => response.json())
        .then(responseJson => 
        {
            return responseJson
        })
        .catch(error => 
        {
            console.log(error.message)
            return SOMETHING_WENT_WRONG
        })
    }

    static callApiAxios = async (endpoint, method, params={}, auth_token=null) => {
        let authorization = 'Basic ' + Buffer.from(BASIC_AUTH_CREDENTIALS).toString('base64')
        if (auth_token){
            authorization = 'Bearer ' + auth_token
        }
        params.encryption_disable_key = ENCRYPTION_DISABLE_KEY
        const api_url = API_BASE_URL + endpoint
        const options = {
            method: method,
            headers: {
                'Content-Type': REQUEST_CONTENT_TYPE,
                'Authorization': authorization
            },
            data: JSON.stringify(params),
            baseURL: api_url
        }
        return axios(options)
        .then(function (response) 
        {
            return response.data
        }).catch(function (error) 
        {
            try
            {
                return error.response.data
            }
            catch (error)
            {
                return null
            }
        })
    }
}