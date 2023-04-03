import React, { createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
       
    
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email,password) =>{
            return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const LogOut = () =>{
        return signOut(auth);
    }

    const authInfo = {providerLogin,createUser,logInUser,LogOut};

    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;