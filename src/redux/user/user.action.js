export const loginUser = (user) => ({ type: 'LOGIN_USER', payload: user })
export const loginUserErr = (err) => ({ type: 'LOGIN_USER_ERROR', payload: err })
export const logoutUser = () => ({ type: 'LOGOUT_USER' })
