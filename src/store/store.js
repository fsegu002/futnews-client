// Redux
import { createStore, applyMiddleware } from 'redux' 
import rootReducer from './reducers' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loadState } from './localStorage'

const persistedLocalState = loadState('state')

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, persistedLocalState || rootReducer)

const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store)

export {
  store, 
  persistor
}