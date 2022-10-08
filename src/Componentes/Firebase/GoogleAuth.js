import { useContext,createContext } from "react";
import { GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from "./Config";

const AuthContext= createContext()

export const AuthContextProvider=({children}) =>{

    const googleSignIn=() =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
    
    return(
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>

        
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}


