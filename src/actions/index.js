export const login = (isLoggedIn, authToken) => ({'type': 'LOGIN', 'isLoggedIn': isLoggedIn, 'authToken': authToken}) 
export const logout = () => ({'type': 'LOGOUT'})
