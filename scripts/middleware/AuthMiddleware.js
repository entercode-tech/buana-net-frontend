class AuthMiddleware {
  run() {
    alert('anjay')
    window.onload = async function () {
      let gscEl = document.getElementById("gsc-i-id1");
      if (gscEl) {
        gscEl.placeholder = "Search Script";
      }
      createCaptchaSignIn();
      createCaptchaSignUp();
      alert('anjay')
      await showTheUIIfLogined();
    };
  }
}
