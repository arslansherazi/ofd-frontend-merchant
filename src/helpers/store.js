import reducers from '../reducers/index'
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer)

export let persistor = persistStore(store)
export default store
