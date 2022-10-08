import React from "react";
import { Route, Routes } from "react-router-dom";
import { Componenthome } from "./Componentes/Componentehome";
import { Componentlogin } from "./Componentes/Componentelogin";
import { AuthContextProvider } from "./Componentes/Firebase/GoogleAuth";
import { AuthContextProvider2}  from "./Componentes/Firebase/CorreoAuth";
import { Logincorreo } from "./Componentes/logincorreo";
import { Registrocorreo } from "./Componentes/Registrocorreo";


 const App=()=>{
    return(
        <div>
            <AuthContextProvider>
                <AuthContextProvider2>
                    <Routes>
                        <Route path="/" element={<Componentlogin/>}/>
                        <Route path="/home" element={<Componenthome/>}/>
                        <Route path="/Login" element={<Logincorreo/>}/>
                        <Route path="/Registro" element={<Registrocorreo/>}/>
                    </Routes>
                </AuthContextProvider2> 
            </AuthContextProvider>
           
        </div>
    )
    
}
export default App