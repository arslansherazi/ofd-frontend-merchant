export const auth = (state=[], action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: action.isLoggedIn,
                authToken: action.authToken
            }
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                authToken: null
            }
        default:
            return state
    }
}
