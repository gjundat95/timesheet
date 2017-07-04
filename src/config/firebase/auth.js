import { firebase } from '../firebase/config';

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