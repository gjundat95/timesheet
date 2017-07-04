import * as fb from 'firebase';

const config = {
    apiKey: "AIzaSyAyogbiekXjNRbtS3cYGSyOhN5rtdvbm94",
    authDomain: "mytimesheet-b0a7e.firebaseapp.com",
    databaseURL: "https://mytimesheet-b0a7e.firebaseio.com",
    projectId: "mytimesheet-b0a7e",
    storageBucket: "mytimesheet-b0a7e.appspot.com",
    messagingSenderId: "347066572404"
  };

fb.initializeApp(config);

export const firebase = fb;