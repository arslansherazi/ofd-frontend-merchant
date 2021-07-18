export const login = (isLoggedIn, authToken, merchantName) => ({
    'type': 'LOGIN', 
    'isLoggedIn': isLoggedIn, 
    'authToken': authToken, 
    'merchantName': merchantName
}) 
export const logout = () => ({'type': 'LOGOUT'})
