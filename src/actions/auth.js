// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";

// import database from '../config/firebase';
// import firebase from '../config/firebase';
import firebase from 'firebase';
import {
  Alert,
 
} from 'react-native';

export const signUp = () => ({
  type: 'SIGN_UP',

});

export const startSignUp = ({email,password}) => {
    return (dispatch) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => 'success')
      .catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error!!');
        console.log(errorMessage);
        Alert.alert(errorMessage);
        dispatch(signUp());
        return errorMessage;
      });
    };
  };
// export const startSignUp = ({email,password}) => {
//     return () => {
//       return auth().createUserWithEmailAndPassword(email, password).then(function() {
//         // Sign-out successful.
//       }).catch(function(error) {
//         // An error happened.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//     };
//   };
