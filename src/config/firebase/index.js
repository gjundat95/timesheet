import RNFetchBlob from 'react-native-fetch-blob'
import { Platform } from 'react-native';
import { firebase } from '../firebase/config';
import { addImageToDb } from '../../config/firebase/database';

const storage = firebase.storage();

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export const register = async (email, password, callback) => {
    let res = {
        isSuccess: true,
        message: 'success'
    }
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                callback(res);
            })
            .catch(function (error) {
                callback({ isSuccess: false, message: '' + error.message });
            });
    } catch (error) {
        callback({ isSuccess: false, message: '' + error });
    }
};

export const login = async (email, password, callback) => {
    let res = {
        isSuccess: true,
        message: 'success'
    }
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
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
    const sessionId = new Date().getTime();
    let uploadBlob = null
    const imageRef = storage.ref('images').child(`${sessionId}`)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        console.warn(imageRef.getDownloadURL());
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        console.warn('thanh cong: '+url);
        addImageToDb(sessionId, url);
        resolve(url)
      })
      .catch((error) => {
        console.warn('loi: '+error);
        reject(error)
    })
  })
}
