import { createSelector } from 'reselect'


const selectUser = state => state.user

export const getCurrentUSer = createSelector(
    [selectUser],
    (user) => user.currentUser ? user.currentUser : null
)

export const getLoginError = createSelector(
    [selectUser],
    (user) => user.error ? user.error : null
)

export const isAuthenticated = createSelector(
    [selectUser],
    (user) => user.isAuthenticated ? user.isAuthenticated : null
)