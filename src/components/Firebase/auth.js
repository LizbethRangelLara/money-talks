import { doc } from "prettier";
import { db,firebaseAuth,storageKey } from "./constants";

export function auth(email, password){
    return firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then(saveUser)
    .then(localStorage.setItem(storageKey, email))
}

export function logout(){
    localStorage.removeItem(storageKey)
    return firebaseAuth().signOut();
}

export function login(email, password){
    return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(localStorage.setItem(storageKey, email));
}

export function resetPassword(email){
    return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser(user){
    return db
    .collection(`users`)
    .add({
        email: user.email,
        uid: user.uid
    })
    .then(docRef => docRef)
    .catch(function (error) {
        console.error('Error adding document: ', error);
    })

}