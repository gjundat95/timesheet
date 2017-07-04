import { firebase } from '../firebase/config';

export const addImageToDb = (id, url) => {
    let ref = 'images/' + id;
    firebase.database().ref(ref).set({
        id: id,
        url: url,
    });
};

export const addInfoToDb = (form, callback) => {
    let ref = 'persons/' + form.title;
    firebase.database().ref(ref).set({
        title: form.title,
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
                id: child.val().id,
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
                title: child.val().title,
                age: child.val().age,
                address: child.val().address,
                job: child.val().job,
            });
        });
        console.log(items);
        callback(items);
    });
};