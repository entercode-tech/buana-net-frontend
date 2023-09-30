function CallModalChangePasswordShow() {
  document.querySelector("#myChangePassword").style.display = "block";
}

function CallModalChangePasswordHide() {
  document.querySelector("#myChangePassword").style.display = "none";
}

function CallModalChangeProfileShow() {
  document.querySelector("#myChangeProfile").style.display = "block";
  document.querySelector("#profile-name").value =
    document.querySelector("#your-name").innerHTML;
    document.querySelector("#memebrship_status").innerHTML;
    document.querySelector("#membership_expire").innerHTML;
  document.querySelector("#profile-url").value =
    document.querySelector("#myavatar").src;
}

function CallModalChangeProfileHide() {
  document.querySelector("#myChangeProfile").style.display = "none";
}

document.querySelector("#change-pass-button").addEventListener("click", () => {
  CangePassword();
});

const CangePassword = async () => {
  // const user = firebase.auth().currentUser;
  const newpassword = document.querySelector("#new-password").value;
  const renewpassword = document.querySelector("#re-new-password").value;

  if (newpassword.trim() == "") {
    Alert.render("❌ Enter New Password");
  } else if (newpassword.trim().length < 6) {
    Alert.render("❌ Password must be at least 6 characters.");
  } else if (newpassword != renewpassword) {
    Alert.render("❌ New Password do not match.");
  } else {
    let user = await window.auth.user();

    try {
      let response = await user.changePassword({ password: newpassword });
      if (!response.status) {
        Alert.render("❌ " + response.message);
        return;
      }

      document.querySelector("#myChangePassword").style.display = "none";
      Alert.render(
        "✔️ Update New Password successfully! Relogin please wait.."
      );
      setTimeout(signOut, 10000);
    } catch (e) {
      Alert.render("❌ " + e);
    }
    // user
    //   .updatePassword(newpassword)
    //   .then(function () {
    //     document.querySelector("#myChangePassword").style.display = "none";
    //     Alert.render(
    //       "✔️ Update New Password successfully! Relogin please wait.."
    //     );
    //     setTimeout(signOut, 10000);
    //   })
    //   // Update successful.

    //   .catch((error) => {
    //     // An error ocurred
    //     // ...
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     Alert.render("❌ " + errorMessage);
    //     // ...
    //   });
  }
};

const CangeProfile = async () => {
  // const user = firebase.auth().currentUser;
  const profilename = document.querySelector("#profile-name").value;
  //const profilephone = document.querySelector("#profile-phone").value;
  const profileurl = document.querySelector("#profile-url").value;
  let user = await window.auth.user();

  try {
    let response = await user.updateProfile({
      name: profilename,
      photo_url: profileurl,
    });

    if (!response.status) {
      Alert.render("❌ " + response.message);
      return;
    }
    document.querySelector("#myChangeProfile").style.display = "none";
    Alert.render("✔️ Update Profile successfully! reload page, please wait..");
    setTimeout(() => {
      document.location.reload();
    }, 5000);
  } catch (error) {
    Alert.render("❌ " + error);
  }
};

const DeleteMember = () => {
  Confirm.render2("❓ Are you sure for delete this member account?");
};
