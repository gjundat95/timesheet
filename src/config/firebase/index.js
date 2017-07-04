import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native';
 
var config = {
  apiKey: "AIzaSyB7sqI4bILoWGiPs4ZOvXevgfZHrMwPeNs",
  authDomain: "timesheet-9729f.firebaseapp.com",
  databaseURL: "https://timesheet-9729f.firebaseio.com",
  storageBucket: "timesheet-9729f.appspot.com",
};

firebase.initializeApp(config);
const storage = firebase.storage();

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

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

export const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('images').child(`${sessionId}`)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
}