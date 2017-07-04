import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native';
import store from '../../store';
import { login, logout, request, requestError, requestSuccess } from '../../actions/action-creator';
 
var config = {
    apiKey: "AIzaSyB7sqI4bILoWGiPs4ZOvXevgfZHrMwPeNs",
    authDomain: "timesheet-9729f.firebaseapp.com",
    databaseURL: "https://timesheet-9729f.firebaseio.com",
    projectId: "timesheet-9729f",
    storageBucket: "timesheet-9729f.appspot.com",
    messagingSenderId: "189591375420"
};

firebase.initializeApp(config);
const storage = firebase.storage();

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export const loginAsync = async (account, callback) => {
    store.dispatch(request());
    let res = {
        isSuccess: true,
        message: 'success'
    }
    try {
        await firebase.auth().signInWithEmailAndPassword(account.username, account.password)
        .then(function(){
            store.dispatch(login());
            store.dispatch(requestSuccess());
            callback(res);
        })
        .catch(function (error) {
           store.dispatch(requestError());
           console.warn()
           callback({ isSuccess: false, message: '' + error.message }); 
        });

    } catch (error) {

        callback({ isSuccess: false, message: '' + error });
    }
};

export const logoutAsync = async () => {
    store.dispatch(request());

    try {
        await firebase.auth().signOut().then(() => {
            store.dispatch(logout());
            store.dispatch(requestSuccess());
        });
    } catch (error) {
        store.dispatch(requestError());
        console.log(error);
    }
}

export const uploadImage = (uri, mime = 'application/octet-stream') => {
  store.dispatch(request());

  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref('images').child(`${sessionId}`);

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        store.dispatch(requestSuccess());
        resolve(url)
      })
      .catch((error) => {
        store.dispatch(requestError());
        reject(error);
    })
  })
}