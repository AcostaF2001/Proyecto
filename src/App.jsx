import React from "react";
import { Route, Routes } from "react-router-dom";
import { Componenthome } from "./Componentes/Componentehome";
import { Login } from "./pages/login/Login";
import { AuthContextProvider } from "./Firebase/GoogleAuth";
import { AuthContextProvider2}  from "./Firebase/CorreoAuth";
import { Logincorreo } from "./Componentes/logincorreo";
import { Registrocorreo } from "./Componentes/Registrocorreo";
import './assets/styles/variables.scss'
import './assets/styles/global.scss'

import { Componentgps } from "./Componentes/Componentegps";


 const App=()=>{
    return(
        <div>
            <AuthContextProvider>
                <AuthContextProvider2>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Componentgps/>}/>
                        <Route path="/Login" element={<Logincorreo/>}/>
                        <Route path="/Registro" element={<Registrocorreo/>}/>
                    </Routes>
                </AuthContextProvider2> 
            </AuthContextProvider>
           
        </div>
    )
    
}
export default App