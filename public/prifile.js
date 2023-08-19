



// eDIT pROFILE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const user = firebase.auth().currentUser;

const profileForm = document.getElementById('profileForm');
const profilePhoto = document.getElementById('profilePhoto');
const profileFirstName = document.getElementById('profileFirstName');
const profileLastName = document.getElementById('profileLastName');
const newPassword = document.getElementById('newPassword');
const confirmNewPassword = document.getElementById('confirmNewPassword');

// Set initial values from user data
profilePhoto.value = user.photoURL;
profileFirstName.value = user.displayName.split(' ')[0];
profileLastName.value = user.displayName.split(' ')[1];

profileForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const newPhotoURL = profilePhoto.value;
  const newFirstName = profileFirstName.value;
  const newLastName = profileLastName.value;
  const newPwd = newPassword.value;
  const confirmPwd = confirmNewPassword.value;

  if (newPwd !== confirmPwd) {
    alert("Passwords do not match!");
    return;
  }

  try {
    await user.updateProfile({
      displayName: `${newFirstName} ${newLastName}`,
      photoURL: newPhotoURL
    });

    // Update other profile information in Firestore if needed
    
    if (newPwd) {
      await user.updatePassword(newPwd);
    }

    alert("Profile updated successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to update profile. Please try again.");
  }
});