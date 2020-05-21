
const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isAuthenticated: false
}

const userReducer = ( state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: payload,
                isAuthenticated: true,
                error:  null
            }
            case 'LOGIN_USER_ERROR':
                return {
                    ...state,
                error: payload
             }
        case 'LOGOUT_USER':
                return {
                    ...state,
                error:  null,
                isAuthenticated: false,
                currentUser: null
             }
        default:
            return state
    }
}

export default userReducer