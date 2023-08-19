
import firebaseauth from firebaseConfig
import firebaseauth from firebase


//SING UP 
const firebaseConfig = {
    apiKey : "AIzaSyBW50AT6zAw3kg012S6ruQSJ7kAi48XRXs",
    authDomain: "mini-hackathon-80871.firebaseapp.com",
    projectId: "mini-hackathon-80871",
    storageBucket: "mini-hackathon-80871.appspot.com",
    messagingSenderId: "1072078875450",
    appId: "1:1072078875450:web:69ac60ec8f89c701b47e03",
    measurementId: "G-JT735N9LX9"
    
    };
    firebase.initializeApp(firebaseConfig);
  
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const repeatPassword = document.getElementById('repeatPassword').value;
  
      if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
  
        // Update user profile with first name and last name
        await user.updateProfile({
          displayName: `${firstName} ${lastName}`
        });
  
        alert(`Signup successful! Welcome, ${user.displayName}`);
        // Redirect to dashboard or another page
      } catch (error) {
        console.error(error);
        alert("Signup failed. Please try again.");
      }
    })