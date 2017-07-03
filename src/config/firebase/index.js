import * as firebase from 'firebase';
 
var config = {
  apiKey: "AIzaSyB7sqI4bILoWGiPs4ZOvXevgfZHrMwPeNs",
  authDomain: "timesheet-9729f.firebaseapp.com",
  databaseURL: "https://timesheet-9729f.firebaseio.com",
  storageBucket: "timesheet-9729f.appspot.com",
};

firebase.initializeApp(config);

export const login = async (account, callback) => {
    let res = {
        isSuccess: true,
        message: 'success'
    }
    try {
        await firebase.auth().signInWithEmailAndPassword(account.email, account.password)
        .then(function(){
            callback(res);
        })
        .catch(function (error) {
           callback({ isSuccess: false, message: '' + error.message }); 
        });

    } catch (error) {
        callback({ isSuccess: false, message: '' + error });
    }
};

export const logout = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        console.log(error);
    }
}