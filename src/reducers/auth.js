export const auth = (state=[], action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: action.isLoggedIn,
                authToken: action.authToken,
                merchantName: action.merchantName
            }
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                authToken: null,
                merchantName: ''
            }
        default:
            return state
    }
}
