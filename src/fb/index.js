import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAdGUnpU9J3IInegNhnMd4A--jgVaY0QE0',
    authDomain: 'ms-studio-99377.firebaseio.com/',
    databaseURL: 'https://ms-studio-99377.firebaseio.com/',
    projectId: 'ms-studio-99377'
};

export const db = firebase.initializeApp(config).firestore();
export const {Timestamp} = firebase.firestore;
export const fbstore = firebase.firestore;