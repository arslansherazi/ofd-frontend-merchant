import { Component } from 'react'
import { REQUEST_CONTENT_TYPE, API_BASE_URL, SOMETHING_WENT_WRONG, BASIC_AUTH_CREDENTIALS, ENCRYPTION_DISABLE_KEY } from '../common/constants'


export default class CommonHelpers extends Component 
{
    static call_api = async (endpoint, method, params, auth_token=null) =>
    {
        let authorization = 'Basic ' + Buffer.from(BASIC_AUTH_CREDENTIALS).toString('base64')
        if (auth_token)
            authorization = 'Bearer ' + auth_token
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
        .then(response_json => 
        {
            return response_json
        })
        .catch(error => 
        {
            console.log(error.message)
            return SOMETHING_WENT_WRONG
        })
    }
}