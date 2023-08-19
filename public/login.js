import firebase from "firebase"
import firebase from "firestore"


//LOGIN
// const loginhandler=(e)=>
// {
//     preventDefault();
//     
//     signInWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{

//     })
// }

window.loginhandler = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const auth= getAuth ()  ; 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    alert(`Welcome back, ${user.displayName}!`);
    // Redirect to dashboard or another page
    window.location.href = 'Dashboard.html';
  } catch (error) {
    console.error(error);
    alert("Login failed. Please check your email and password.");
  }
});