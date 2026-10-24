import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBQ21jgMt0UyEEFaW9Qy-LjxmAk_HHBL70",
  authDomain: "netflix-738df.firebaseapp.com",
  projectId: "netflix-738df",
  storageBucket: "netflix-738df.firebasestorage.app",
  messagingSenderId: "296243483879",
  appId: "1:296243483879:web:e2f158c9900b8c28b47e42"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid, 
            name,
            authProvider: "local",
            email
        })
        return true
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        return false
    }
}


const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)

        return true
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        return false
    }
}


const logout = () => {
    signOut(auth)
}


export {auth, db, login, signup, logout}