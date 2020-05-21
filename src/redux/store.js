import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger]

const store = createStore(rootReducer, 
    composeWithDevTools(
    applyMiddleware(...middlewares)
    )    
)
const persistor = persistStore(store)
store.subscribe(() => {
    console.log(store.getState())
})
export {
    store,
    persistor
}