class AuthMiddleware {
  run() {
    window.onload = async function () {
      let gscEl = document.getElementById("gsc-i-id1");
      if (gscEl) {
        gscEl.placeholder = "Search Script";
      }
      createCaptchaSignIn();
      createCaptchaSignUp();
      await showTheUIIfLogined();
    };
  }
}
