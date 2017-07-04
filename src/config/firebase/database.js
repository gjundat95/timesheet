import { firebase } from '../firebase/config';


export const addImageToDb = (id, url) => {
    let ref = 'tinhngo/' + id;
    firebase.database().ref(ref).set({
        id: id,
        url: url,
    });
}