import { Component } from 'react'
import { REQUEST_CONTENT_TYPE, API_BASE_URL, SOMETHING_WENT_WRONG, BASIC_AUTH_CREDENTIALS, ENCRYPTION_DISABLE_KEY } from '../common/constants'


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
}