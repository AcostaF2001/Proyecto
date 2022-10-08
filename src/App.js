import React from "react";
import { Route, Routes } from "react-router-dom";
import { Componenthome } from "./Componentes/Componentehome";
import { Componentlogin } from "./Componentes/Componentelogin";
import { AuthContextProvider } from "./Componentes/Firebase/GoogleAuth";

 const App=()=>{
    return(
        <div>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Componentlogin/>}/>
                    <Route path="/home" element={<Componenthome/>}/>
                    
                </Routes>
            </AuthContextProvider>
           
        </div>
    )
    
}
export default App