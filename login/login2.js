window.onload = function () {
  createCaptchaSignIn();
  createCaptchaSignUp();
  createTable();
  addRow()
}

var code_signin;

function createCaptchaSignIn() {
  //clear the contents of captcha div first 
  document.getElementById('captcha-signin').innerHTML = "";
  var charsArray =
    "0123456789";
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
  document.getElementById('captcha-signup').innerHTML = "";
  var charsArray =
    "0123456789";
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

document.querySelector("#cpatchaTextBoxSignIn").addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    e.preventDefault();
    login();
  }
});

document.querySelector("#cpatchaTextBoxSignUp").addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    e.preventDefault();
    register();
  }
});

function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.querySelector('#dialogoverlay');
    var dialogbox = document.querySelector('#dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (400 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.querySelector('#dialogboxhead').innerHTML = "<i>Information!</i>";
    document.querySelector('#dialogboxbody').innerHTML = dialog;
    document.querySelector('#dialogboxfoot').innerHTML = '<button style="width:100px" onclick="Alert.ok()">OK</button>';
  }
  this.ok = function () {
    document.querySelector('#dialogbox').style.display = "none";
    document.querySelector('#dialogoverlay').style.display = "none";
  }
}
var Alert = new CustomAlert();

document.querySelector("#year").innerHTML = new Date().getFullYear();
var modal_click = document.querySelector("#myModal");
var span_click = document.getElementsByClassName("close")[0];

function callmodal() {
  modal_click.style.display = "block";
}
span_click.onclick = function () {
  modal_click.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal_click) {
    modal_click.style.display = "none";
  }
}

document.querySelector("#myLogin").addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

document.querySelector("#myLockScreen").addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

document.querySelector("#myModal").addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}

document.querySelector("#mymenu").addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAVAJkbUGmPHogF_WJRa3vxZ2YuKDsvqns",
  authDomain: "buananetpbun-5d979.firebaseapp.com",
  databaseURL: "https://buananetpbun-5d979-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buananetpbun-5d979",
  storageBucket: "buananetpbun-5d979.appspot.com",
  messagingSenderId: "912166778245",
  appId: "1:912166778245:web:c845ec7e720f7bd84580ec",
  measurementId: "G-FSDV7HGD99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();

const user = firebase.auth().currentUser;

const provider = new firebase.auth.GoogleAuthProvider();


document.querySelector("#google-sign-in").addEventListener("click", () => {

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


  //firebase.auth().getRedirectResult().then(function(result) {
  //	if (result.credential) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  //		var token = result.credential.accessToken;
  // ...
  //	}
  // The signed-in user info.
  //	var user = result.user;
  //}).catch(function(error) {
  // Handle Errors here.
  //	var errorCode = error.code;
  //	var errorMessage = error.message;
  // The email of the user's account used.
  //	var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  //	var credential = error.credential;
  // ...
  //});
  //	firebase.auth().signInWithPopup(provider).then(res => {}).catch(e => {})
});


// document.querySelector("#verify").addEventListener("click", () => {
//   var actionCodeSettings = {
//     // After email is verified, the user will be give the ability to go back
//     // to the sign-in page.
//     url: 'https://buananetpbun.github.io/',
//     handleCodeInApp: false
//   };
//   firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
//     .then(function () {
//       // Verification email sent.
//       Alert.render("✔️ Verification link sent to your email. if you don't see it, please check your mail inbox in spam folder.")
//     })
//     .catch(function (error) {
//       // Error occurred. Inspect error.code.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       Alert.render('❌ ' + errorMessage);
//     });

// });


var myTimer;

function myInterval() {
  location.reload()
}


// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     const email = user.email;
//     const emailVerified = user.emailVerified;

//     document.querySelector('#welcome-email').innerHTML = email
//     document.querySelector('#myavatar').src = firebase.auth().currentUser.photoURL;
	
    


// if (firebase.auth().currentUser.photoURL == null) {
// document.querySelector('#myavatar').src = "https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png";
// }

//     clearInterval(myTimer)


//     if (emailVerified == true) {
//       document.querySelector('#verify').style.display = "none"
//       document.querySelector('#email_Verified').innerHTML = "✔️"
//       document.querySelector('#myLockScreen').style.display = "none";
//       document.querySelector('#myModal').style.display = "block";
//     } else {
//       document.querySelector('#email_Verified').innerHTML = "❌"
//       document.querySelector('#myLockScreen').style.display = "block";
//       document.querySelector('#myModal').style.display = "none";
//     }

//   } else {

//     document.querySelector("#myLogin").style.display = "block";

//     var timeleft = 180;
//     var downloadTimer = setInterval(function () {
//       if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//       } else {
//         document.getElementById("countdown").innerHTML = "Reload Page in " + timeleft + " seconds";
//       }
//       timeleft -= 1;
//     }, 1000);

//     myTimer = setInterval(myInterval, 180000)
//   }
// });


document.querySelector("#show-register").addEventListener("click", () => {
  showRegistration();
});


const showRegistration = () => {
  document.querySelector("#registration-page").classList.remove("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector("#homepage").classList.add("hide");
  document.querySelector("#show-login").classList.remove("hide");
  document.querySelector("#show-register").classList.add("hide");
  document.querySelector("#google-sign-in").innerHTML = "Sign-Up with Google"
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
  document.querySelector("#google-sign-in").innerHTML = "Sign-In with Google"
};

document.querySelector("#signout").addEventListener("click", () => {
  signOut();
});


const register = () => {
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
      // alert("Valid Captcha")
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.render('❌ ' + errorMessage);
          // ...
        });
    } else {
      Alert.render('❌ Invalid Captcha. try Again');
      createCaptchaSignUp();
      document.getElementById('cpatchaTextBoxSignUp').value = "";
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


const login = () => {
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
      authenticate(email, password);
    } else {
      Alert.render('❌ Invalid Captcha. try Again');
      document.getElementById('cpatchaTextBoxSignIn').value = "";
      createCaptchaSignIn();
    }


    //lsRememberMe()

  }
};

document.querySelector("#login").addEventListener("click", () => {
  login();
});

//sign in when you hit enter
document
  .querySelector("#login-password")
  .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      e.preventDefault();
      login();
    }
  });

// const authenticate = (email, password) => {
//   const auth = firebase.auth();
//   auth.signInWithEmailAndPassword(email, password);
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;

//       Alert.render('❌ ' + errorMessage);
//     });
// };

const showHomepage = () => {
  document.querySelector("#registration-page").classList.add("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector("#homepage").classList.remove("hide");
  document.querySelector("#myLogin").style.display = "none";
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // location.reload();
      location.href = 'https://buananetpbun.github.io'
    })
    .catch(function (error) {
      Alert.render("❌ error signing out, check network connection");
    });
};

auth.onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    showHomepage();
  }
});

document
  .querySelector("#forgot-password")
  .addEventListener("click", () => {
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
      Alert.render("✔️ Send to your e-mail successfully! if you don't see it, please check your mail inbox in spam folder.");
    })
    .catch(function (error) {
      Alert.render("❌ invalid e-mail or bad network connection.");
    });
}