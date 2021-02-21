import { auth } from '../../services/firebase';

// Sign the user in. Will probably need a form to call this 'onSubmit()'
export async function signInUser(email, password){ 
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      // Signed in
      //var user = userCredential.user;
      window.history.pushState(null, null, "/home");
      window.location.reload();
      return data.user.getIdToken();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Invalid Login information. Please try again.");
      return(errorCode, errorMessage);
    });
}

// Sign the user out
export function signOutUser() {
  auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Signed Out.");
    }).catch((error) => {
      // An error happened.
      console.log("Error: ", error);
    });
}