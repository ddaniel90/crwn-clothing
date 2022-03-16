import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyBUVlhme0ecOCYzQsgN3AJ3JEMe45FajDs',
	authDomain: 'crwdb-a7a48.firebaseapp.com',
	projectId: 'crwdb-a7a48',
	storageBucket: 'crwdb-a7a48.appspot.com',
	messagingSenderId: '10073899785',
	appId: '1:10073899785:web:b0890f3e6610ee2c8909d8',
	measurementId: 'G-E2742MYCWN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
