document.querySelector("#myLogin").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

document.querySelector("#myLockScreen").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

document.querySelector("#myModal").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

document.querySelector("#mymenu").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// var myTimer;

// function myInterval() {
//   location.reload();
// }

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     const email = user.email;
//     const emailVerified = user.emailVerified;

//     document.querySelector("#welcome-email").innerHTML = email;
//     document.querySelector("#myavatar").src =
//       firebase.auth().currentUser.photoURL;

//     if (firebase.auth().currentUser.photoURL == null) {
//       document.querySelector("#myavatar").src =
//         "https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png";
//     }

//     clearInterval(myTimer);

//     if (emailVerified == true) {
//       document.querySelector("#verify").style.display = "none";
//       document.querySelector("#email_Verified").innerHTML = "✔️";
//       document.querySelector("#myLockScreen").style.display = "none";
//       document.querySelector("#myModal").style.display = "block";
//     } else {
//       document.querySelector("#email_Verified").innerHTML = "❌";
//       document.querySelector("#myLockScreen").style.display = "block";
//       document.querySelector("#myModal").style.display = "none";
//     }
//   } else {
//     document.querySelector("#myLogin").style.display = "block";

//     var timeleft = 180;
//     var downloadTimer = setInterval(function () {
//       if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//       } else {
//         document.getElementById("countdown").innerHTML =
//           "Reload Page in " + timeleft + " seconds";
//       }
//       timeleft -= 1;
//     }, 1000);

//     myTimer = setInterval(myInterval, 180000);
//   }
// });
