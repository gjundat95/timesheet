import { firebase } from '../firebase/config';
import { set, get } from '../../util/AsyncStore';

export const register = async (email, password, callback) => {
    let res = {
        isSuccess: true,
        message: 'success'
    }
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                console.log('register success');
                callback(res);
            })
            .catch(function (error) {
                console.log('register failed');
                callback({ isSuccess: false, message: '' + error.message });
            });
    } catch (error) {
        console.log('register failed2');
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
                set('Key_Login', 'true');
                callback(res);
            })
            .catch(function (error) {
                callback({ isSuccess: false, message: '' + error.message });
            });
            

    } catch (error) {
        callback({ isSuccess: false, message: '' + error });
    }
};

export const logout = async (callback) => {
    try {
        await firebase.auth().signOut()
        .then(()=>{
            set('Key_Login', 'false');
            callback('logout sucess');
        }).catch((error)=>{
            //callback(error);
            console.warn(error);
        });
        
    } catch (error) {
        console.warn(error);
        //callback(error);
    }
}