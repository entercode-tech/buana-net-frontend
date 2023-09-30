class User {
  constructor(objects) {
    // Set default value if window.auth is not defined
    this.auth = window.auth || new Auth();
    this.request = new RequestAPI();

    // Check if objects is an object and not null
    if (objects && typeof objects === "object") {
      // Iterate through the properties of objects
      for (const key in objects) {
        if (objects.hasOwnProperty(key)) {
          // Set each property of objects as a property of the class instance
          this[key] = objects[key];
        }
      }
    }
  }

  async login() {
    let email = this.email;
    let password = this.password;

    const credentials = {
      email,
      password,
    };
    try {
      await this.auth.login(credentials);
    } catch (error) {
      throw error;
    }
  }
  async register() {
    let email = this.email;
    let password = this.password;

    const credentials = {
      email,
      password,
    };
    await this.auth.register(credentials);
  }
  async updateProfile({ name, photo_url }) {
    let header = this.auth.getHeaderAuthorization();
    let response = await this.request.postData(
      "/update-profile",
      {
        name,
        photo_url,
      },
      header
    );
    return await response;
  }
  async changePassword({ password }) {
    let header = this.auth.getHeaderAuthorization();

    let response = await this.request.postData(
      "/change-password",
      { password },
      header
    );
    return await response;
  }
  async sendEmailVerification() {
    let header = this.auth.getHeaderAuthorization();

    let response = await this.request.postData(
      "/send-email-verification",
      {},
      header
    );
    return await response;
  }
  async deleteAccount() {
    let header = this.auth.getHeaderAuthorization();

    let response = await this.request.postData("/delete-account", {}, header);
    return await response;
  }

  logout() {
    this.auth.logout();
  }
}
