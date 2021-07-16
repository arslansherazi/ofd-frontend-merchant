import React from 'react'
import ReactDOM from 'react-dom'
import Router from './App'
import store, { persistor } from  './helpers/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router />
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
)
