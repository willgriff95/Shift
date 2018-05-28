class Auth {

  // `static` - this lets us use the methods in the object without instantiating a whole of the object.
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getPayload() {
    const token = this.getToken();
    if(!token) return null;
    const parts = token.split('.');
    if(parts.length < 3) return null;
    // `atob()` just straight up lets you decrypt the payload of a token. It's super easy, so actually that means anything that's stored in the payload is not secure.
    return JSON.parse(atob(parts[1]));
  }

  static isAuthenticated() {
    const payload = this.getPayload();
    if(!payload) return false;
    const now = Math.round(Date.now() / 1000);
    return now < payload.exp;
  }

  static isCurrentUser(user) {
    return this.isAuthenticated() && user._id === this.getPayload().sub;
  }
}

export default Auth;
