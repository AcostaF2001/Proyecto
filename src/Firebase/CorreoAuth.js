import { createContext, useState,useContext } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { auth } from "./Config";

const UserContext2 = createContext();

export const AuthContextProvider2=({children})=>{
    const createUser2=(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    return(
        <UserContext2.Provider value={{createUser2, signIn }} >
             {children}
        </UserContext2.Provider>
    )
}

export const UserAuth2=() =>{
    return useContext(UserContext2)
}