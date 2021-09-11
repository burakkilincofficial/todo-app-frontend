class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    registerSuccessfulLogout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService()