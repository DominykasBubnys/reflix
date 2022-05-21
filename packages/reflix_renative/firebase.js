import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const NEXT_PUBLIC_FIREBASE_API="AIzaSyBiE5n47xyVekgA8sqJNlQu-ICP19mDuBI"
const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="reflix-js-auth.firebaseapp.com"
const NEXT_PUBLIC_FIREBASE_PROJECT_ID="reflix-js-auth"
const NEXT_PUBLIC_FIREBASE_DATABASE_URL="https://reflix-js-auth-default-rtdb.firebaseio.com"
const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="reflix-js-auth.appspot.com"
const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1085268825560
const NEXT_PUBLIC_FIREBASE_APP_ID="1:1085268825560:web:35000c34d1bcb525358ead"

const app = firebase.initializeApp({
  apiKey: NEXT_PUBLIC_FIREBASE_API,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID
})

export const database = firebase.database();
export const auth = app.auth()
export default app