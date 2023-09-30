class Auth {
  constructor() {
    this.request = new RequestAPI();
  }
  async check() {
    if (this.getToken()) {
      try {
        await this.user();

        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
  async register(credentials) {
    await this.request.postData("/register", credentials);
  }
  async login(credentials) {
    let response = await this.request.postData("/login", credentials);

    if (response.status) {
      this.setToken(response.data.token);
      return true;
    }

    throw {
      message: response.data,
    };
  }
  async user() {
    let response;
    try {
      response = await this.request.postData(
        "/get-profile",
        {},
        {
          Authorization: `Bearer ${this.getToken()}`,
        }
      );

      return new User(response);
    } catch (error) {
      //   myconsole(error);
      this.logout();
    }
  }

  getHeaderAuthorization() {
    return {
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
  getLocalstoragePrefix() {
    return window.location.hostname;
  }
  getTokenKey() {
    return `${this.getLocalstoragePrefix()}_user_token`;
  }
  setToken(token) {
    localStorage.setItem(this.getTokenKey(), token);
  }
  getToken() {
    return localStorage.getItem(this.getTokenKey()) ?? false;
  }
  logout() {
    localStorage.removeItem(this.getTokenKey());
    // location.reload();
  }
}

window.auth = new Auth();
