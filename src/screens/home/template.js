import React from 'react'
import './styling.css'


export const template = component =>
{
    // template content
    return(
        <div>
            <button onClick={component.logout}>
                Logout
            </button>
        </div>
    )
}
