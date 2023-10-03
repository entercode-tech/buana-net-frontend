// window.onload = async function () {
//   let gscEl = document.getElementById("gsc-i-id1");
//   if (gscEl) {
//     gscEl.placeholder = "Search Script";
//   }
//   createCaptchaSignIn();
//   createCaptchaSignUp();
//   await showTheUIIfLogined();
// };
var myconsole = console.log;

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAVAJkbUGmPHogF_WJRa3vxZ2YuKDsvqns",
//   authDomain: "buananetpbun-5d979.firebaseapp.com",
//   databaseURL:
//     "https://buananetpbun-5d979-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "buananetpbun-5d979",
//   storageBucket: "buananetpbun-5d979.appspot.com",
//   messagingSenderId: "912166778245",
//   appId: "1:912166778245:web:c845ec7e720f7bd84580ec",
//   measurementId: "G-FSDV7HGD99",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// //invokes firebase authentication.
// const auth = firebase.auth();

// const user = firebase.auth().currentUser;

// const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector("#google-sign-in").addEventListener("click", () => {
  window.location.href = '../login/google.html'
});

var code_signin;

function createCaptchaSignIn() {
  //clear the contents of captcha div first
  document.getElementById("captcha-signin").innerHTML = "";
  var charsArray = "0123456789";
  var lengthOtp = 4;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 150;
  canv.height = 40;
  var ctx = canv.getContext("2d");
  ctx.font = "38px verdana";
  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, canv.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "pink");
  gradient.addColorStop("1.0", "red");
  // Fill with gradient
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  ["round", "bevel", "miter"].forEach((join, i) => {
    ctx.lineJoin = join;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(140, 40);
    ctx.stroke();
  });
  ctx.strokeText(captcha.join(""), 20, 35);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code_signin = captcha.join("");
  document.getElementById("captcha-signin").appendChild(canv); // adds the canvas to the body element
}
var code_signup;

function createCaptchaSignUp() {
  //clear the contents of captcha div first
  document.getElementById("captcha-signup").innerHTML = "";
  var charsArray = "0123456789";
  var lengthOtp = 4;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 150;
  canv.height = 40;
  var ctx = canv.getContext("2d");
  ctx.font = "38px verdana";
  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, canv.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "pink");
  gradient.addColorStop("1.0", "red");
  // Fill with gradient
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  ["round", "bevel", "miter"].forEach((join, i) => {
    ctx.lineJoin = join;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(140, 40);
    ctx.stroke();
  });
  ctx.strokeText(captcha.join(""), 20, 35);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code_signup = captcha.join("");
  document.getElementById("captcha-signup").appendChild(canv); // adds the canvas to the body element
}
document
  .querySelector("#cpatchaTextBoxSignIn")
  .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      e.preventDefault();
      login();
    }
  });
document
  .querySelector("#cpatchaTextBoxSignUp")
  .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      e.preventDefault();
      register();
    }
  });

document.querySelector("#year").innerHTML = new Date().getFullYear();
var modal_click = document.querySelector("#myModal");
var span_click = document.getElementsByClassName("close")[0];

function callmodal() {
  modal_click.style.display = "block";
}
span_click.onclick = function () {
  modal_click.style.display = "none";
};
var modal_login = document.querySelector("#myLogin");

function callmodalLogin() {
  modal_login.style.display = "block";
}
window.onclick = function (event) {
  if (event.target == modal_login) {
    modal_login.style.display = "none";
  }
  if (event.target == modal_click) {
    modal_click.style.display = "none";
  }
};
document.querySelector("#verify").addEventListener("click", async () => {

  let user = await window.auth.user();

  try {
    let response = await user.sendEmailVerification();
    if (!response.status) {
      Alert.render("❌ " + response.message);
      return;
    }

    Alert.render(
      "✔️ Verification link sent to your email. if you don't see it, please check your mail inbox in spam folder."
    );
  } catch (e) {
    Alert.render("❌ " + e);
  }
});

document.querySelector("#show-register").addEventListener("click", () => {
  showRegistration();
});
const showRegistration = () => {
  document.querySelector("#registration-page").classList.remove("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector("#homepage").classList.add("hide");
  document.querySelector("#show-login").classList.remove("hide");
  document.querySelector("#show-register").classList.add("hide");
  document.querySelector("#google-sign-in").innerHTML = "Sign-Up with Google";
};

document.querySelector("#show-login").addEventListener("click", () => {
  showLogin();
});
const showLogin = () => {
  document.querySelector("#registration-page").classList.add("hide");
  document.querySelector("#login-page").classList.remove("hide");
  document.querySelector("#homepage").classList.add("hide");
  document.querySelector("#show-login").classList.add("hide");
  document.querySelector("#show-register").classList.remove("hide");
  document.querySelector("#google-sign-in").innerHTML = "Sign-In with Google";
};

document.querySelector("#signout").addEventListener("click", () => {
  signOut();
});

const register = async () => {
  const email = document.querySelector("#registration-email").value;
  const reemail = document.querySelector("#registration-reemail").value;
  const password = document.querySelector("#registration-password").value;
  if (email.trim() == "") {
    Alert.render("❌ Enter E-mail.");
  } else if (password.trim().length < 6) {
    Alert.render("❌ Password must be at least 6 characters.");
  } else if (email != reemail) {
    Alert.render("❌ emails do not match.");
  } else {
    event.preventDefault();

    if (document.getElementById("cpatchaTextBoxSignUp").value == code_signup) {
      let user = new User({
        email,
        password
      });
      try {
        await user.register();
        await user.login();

        await showTheUIIfLogined();
      } catch (error) {
        // Alert.render("❌ " + error.message);
        // myconsole(error)
      }
    } else {
      Alert.render("❌ Invalid Captcha. try Again");
      createCaptchaSignUp();
      document.getElementById("cpatchaTextBoxSignUp").value = "";
    }
  }
};
document.querySelector("#register").addEventListener("click", () => {
  register();
});

//register when you hit the enter key
document
  .querySelector("#registration-password")
  .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      e.preventDefault();
      register();
    }
  });

const login = async () => {
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  if (email.trim() == "") {
    Alert.render("❌ Enter E-mail.");
  } else if (password.trim() == "") {
    Alert.render("❌ Enter Password.");
  } else {
    event.preventDefault();

    if (document.getElementById("cpatchaTextBoxSignIn").value == code_signin) {
      // alert("Valid Captcha")
      // authenticate(email, password);
      let user = new User({
        email,
        password
      });
      try {
        await user.login();
        location.reload()
      } catch (error) {
        // Alert.render("❌ " + error.message);
      }
    } else {
      Alert.render("❌ Invalid Captcha. try Again");
      document.getElementById("cpatchaTextBoxSignIn").value = "";
      createCaptchaSignIn();
    }
    //lsRememberMe()
  }
};
var myTimer;

function myInterval() {
  location.reload();
}

async function UIProfile() {
  let userAuth = await window.auth.user();
  let user = userAuth;
  let emailVerified = user?.email_verified_at;

  var expire_date = '-'
  if (userAuth.membership && userAuth.membership.expire_date) {
    const dateTime = new Date(userAuth.membership.expire_date);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    expire_date = `${year}-${month}-${day}`;
  }

  document.querySelector("#myProfile").style.display = "block";

  document.querySelector("#user-id").innerHTML = userAuth.id;
  document.querySelector("#welcome-email").innerHTML = userAuth.email;
  document.querySelector("#profile-email").innerHTML = userAuth.email;
  document.querySelector("#your-name").innerHTML = userAuth.name;
  document.querySelector("#membership_package").innerHTML = userAuth.membership ? userAuth.membership.package.name : '-';
  document.querySelector("#membership_status").innerHTML = userAuth.membership ? userAuth.membership.status : '-';
  document.querySelector("#membership_expire").innerHTML = expire_date;
  document.querySelector("#myavatar").src = userAuth && userAuth.photo_url ? userAuth.photo_url : 'https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png';

  if (emailVerified) {
    document.querySelector("#verify").style.display = "none";
    document.querySelector("#email_Verified").innerHTML =
      " ✔️ <span style='color:#16C60C;font-weight:bold;'>ACTIVATED</span>";
  } else {
    document.querySelector("#email_Verified").innerHTML =
      " ❌ <span style='color:red;font-weight:bold;'>NOT ACTIVATED</span>";
  }
}
async function UIIndex() {
  let userAuth = await window.auth.user();
  let user = userAuth;
  let emailVerified = user?.email_verified_at;
  document.querySelector("#welcome-email").innerHTML = user?.email;
  document.querySelector("#myavatar").src = user && user.photo_url ? user.photo_url : 'https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png';

  function setStyleProp(element, prop, val) {
    let elements = [];
    if (element instanceof HTMLElement) elements = [element];
    else if (typeof element === "object") elements = Object.values(element);
    elements.forEach((el) => (el.style[prop] = val));
    return elements;
  }
  if (emailVerified) {
    document.querySelector("#verify").style.display = "none";
    document.querySelector("#email_Verified").innerHTML = "✔️";
    setStyleProp(
      document.getElementsByClassName("member-only"),
      "display",
      "none"
    );
  } else {
    document.querySelector("#email_Verified").innerHTML = "❌";
  }

  showHomepage();
}
async function UIOther() {
  let userAuth = await window.auth.user();
  let user = userAuth;
  let emailVerified = user?.email_verified_at;

  document.querySelector("#welcome-email").innerHTML = user?.email;
  document.querySelector("#myavatar").src = user && user.photo_url ? user.photo_url : 'https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png';;

  let MylockS = document.querySelector("#myLockScreen");
  if (emailVerified) {
    document.querySelector("#verify").style.display = "none";
    document.querySelector("#email_Verified").innerHTML = "✔️";
    if (MylockS) MylockS.style.display = "none";
    document.querySelector("#myModal").style.display = "block";
  } else {
    document.querySelector("#email_Verified").innerHTML = "❌";
    if (MylockS) MylockS.style.display = "block";
    document.querySelector("#myModal").style.display = "none";
  }

  showHomepage();
}
async function showTheUIIfLogined() {
  let auth = window.auth;

  if (await auth.check()) {
    document.querySelector("#myLogin").style.display = "none";
    if (typeof isRouteProfile !== "undefined") {
      await UIProfile();
    } else if (typeof isIndex !== "undefined") {
      await UIIndex();
    } else {
      await UIOther();
    }
  } else {
    if (typeof isIndex === "undefined") {
      document.querySelector("#myLogin").style.display = "block";
    }
    if (typeof isRouteProfile === "undefined") return;
    var timeleft = 180;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      } else {
        let coundownEL = document.getElementById("countdown");

        if (coundownEL)
          coundownEL.innerHTML = "Reload Page in " + timeleft + " seconds";
      }
      timeleft -= 1;
    }, 1000);

    myTimer = setInterval(myInterval, 180000);
  }
}
document.querySelector("#login").addEventListener("click", () => {
  login();
});
//sign in when you hit enter
document.querySelector("#login-password").addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    e.preventDefault();
    login();
  }
});
const authenticate = (email, password) => {
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.render("❌ " + errorMessage);
    });
};
const showHomepage = () => {
  document.querySelector("#registration-page").classList.add("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector("#homepage").classList.remove("hide");
  document.querySelector("#myLogin").style.display = "none";

  let showLoginMenuEL = document.querySelector("#show-login-menu");

  if (showLoginMenuEL) showLoginMenuEL.style.display = "none";
};
const signOut = () => {
  window.auth.logout();
  location.reload();
  // firebase.auth().signOut().then(function() {
  // location.reload();
  // }).catch(function(error) {
  // 	Alert.render("❌ error signing out, check network connection");
  // });
};

// auth.onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     showHomepage();
//   }
// });

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     const email = user.email;
//     const emailVerified = user.emailVerified;
//     document.querySelector("#welcome-email").innerHTML = email;
//     document.querySelector("#myavatar").src =
//       firebase.auth().currentUser.photo_url;

//     function setStyleProp(element, prop, val) {
//       let elements = [];
//       if (element instanceof HTMLElement) elements = [element];
//       else if (typeof element === "object") elements = Object.values(element);
//       elements.forEach((el) => (el.style[prop] = val));
//       return elements;
//     }

//     if (firebase.auth().currentUser.photo_url == null) {
//       document.querySelector("#myavatar").src =
//         "https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png";
//     }

//     if (emailVerified == true) {
//       document.querySelector("#verify").style.display = "none";
//       document.querySelector("#email_Verified").innerHTML = "✔️";
//       setStyleProp(
//         document.getElementsByClassName("member-only"),
//         "display",
//         "none"
//       );
//     } else {
//       document.querySelector("#email_Verified").innerHTML = "❌";
//     }
//   } else {
//     if (isRoutePprofile)
//       document.querySelector("#myLogin").style.display = "block";
//   }
// });
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     document.querySelector("#myProfile").style.display = "block";

//     document.querySelector("#user-id").innerHTML =
//       firebase.auth().currentUser.uid;
//     document.querySelector("#welcome-email").innerHTML =
//       firebase.auth().currentUser.email;
//     document.querySelector("#profile-email").innerHTML =
//       firebase.auth().currentUser.email;
//     document.querySelector("#your-name").innerHTML =
//       firebase.auth().currentUser.displayName;
//     document.querySelector("#myavatar").src =
//       firebase.auth().currentUser.photo_url;

//     if (firebase.auth().currentUser.photo_url == null) {
//       document.querySelector("#myavatar").src =
//         "https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png";
//     }

//     if (firebase.auth().currentUser.emailVerified == true) {
//       document.querySelector("#verify").style.display = "none";
//       document.querySelector("#email_Verified").innerHTML =
//         " ✔️ <span style='color:#16C60C;font-weight:bold;'>ACTIVATED</span>";
//     } else {
//       document.querySelector("#email_Verified").innerHTML =
//         " ❌ <span style='color:red;font-weight:bold;'>NOT ACTIVATED</span>";
//     }
//   } else {
//     document.querySelector("#myLogin").style.display = "block";
//   }
// });

document.querySelector("#forgot-password").addEventListener("click", () => {
  const email = document.querySelector("#login-email").value;
  if (email.trim() == "") {
    Alert.render("❌ Enter Your E-mail.");
  } else {
    forgotPassword(email);
  }
});
const forgotPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      Alert.render(
        "✔️ Send to your e-mail successfully! if you don't see it, please check your mail inbox in spam folder."
      );
    })
    .catch(function (error) {
      Alert.render("❌ invalid e-mail or bad network connection.");
    });
};

function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.querySelector("#dialogoverlay");
    var dialogbox = document.querySelector("#dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 400 * 0.5 + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.querySelector("#dialogboxhead").innerHTML = "<i>Information!</i>";
    document.querySelector("#dialogboxbody").innerHTML = dialog;
    document.querySelector("#dialogboxfoot").innerHTML =
      '<button style="width:100px" onclick="Alert.ok()">OK</button>';
  };
  this.ok = function () {
    document.querySelector("#dialogbox").style.display = "none";
    document.querySelector("#dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();

function CustomConfirm() {
  this.render2 = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.querySelector("#dialogoverlay");
    var dialogbox = document.querySelector("#dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 400 * 0.5 + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.querySelector("#dialogboxhead").innerHTML = "<i>Confirmation!</i>";
    document.querySelector("#dialogboxbody").innerHTML = dialog;
    document.querySelector("#dialogboxfoot").innerHTML =
      '<button style="width:100px" onclick="Confirm.ok()">OK</button><button style="width:100px" onclick="Confirm.cancel()">Cancel</button>';
  };
  this.ok = async function () {
    document.querySelector("#dialogbox").style.display = "none";
    document.querySelector("#dialogoverlay").style.display = "none";
    let user = await window.auth.user();

    try {
      let response = await user.deleteAccount();

      if (!response.status) {
        Alert.render("❌ " + response.message);
        return;
      }
      Alert.render(
        "✔️ Delete Member Accound successfully! Relogin Please Wait.."
      );
      setTimeout(signOut, 3000);
    } catch (error) {
      Alert.render("❌ " + error);
    }


  };
  this.cancel = function () {
    document.querySelector("#dialogbox").style.display = "none";
    document.querySelector("#dialogoverlay").style.display = "none";
    return false;
  };
}

var Confirm = new CustomConfirm();