import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from '../user/userReducer'
import staffReducer from '../staff/staff.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','staff'],
}

const rootReducer = combineReducers({
    user: userReducer,
    staff: staffReducer
})

export default persistReducer(persistConfig, rootReducer)