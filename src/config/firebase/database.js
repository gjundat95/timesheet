import { firebase } from '../firebase/config';

export const addImageToDb = (form) => {
    let ref = 'images/' + form.key;
    firebase.database().ref(ref).set({
        key: form.key,
        url: form.url,
    });
};

export const addInfoToDb = (form, callback) => {
    let ref = 'persons/' + form.key;
    firebase.database().ref(ref).set({
        key: form.key,
        name: form.name,
        age: form.age,
        address: form.address,
        job: form.job,
    });
    callback('add sucess');
};

export const loadAllImages = (callback) => {

    let ref = 'images';
    let starCountRef = firebase.database().ref(ref);

    starCountRef.on('value', function (snapshot) {
        var items = [];
        snapshot.forEach((child) => {
            items.push({
                key: child.val().key,
                url: child.val().url,
            });
        });
        console.log(items);
        callback(items);
    });
};

export const loadAllPerson = (callback) => {

    let ref = 'persons';
    let starCountRef = firebase.database().ref(ref);

    starCountRef.on('value', function (snapshot) {
        var items = [];
        snapshot.forEach((child) => {
            items.push({
                key: child.val().key,
                name: child.val().name,
                age: child.val().age,
                address: child.val().address,
                job: child.val().job,
            });
        });
        console.log(items);
        callback(items);
    });
};