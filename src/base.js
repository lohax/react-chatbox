import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUX_smoVFYOLZfSzo-6AsZpbDA9AStU6Q",
    authDomain: "chatbox-app-1ce3b.firebaseapp.com",
    databaseURL: "https://chatbox-app-1ce3b.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base