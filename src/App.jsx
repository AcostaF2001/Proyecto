import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Componentes/home/Home";
import { Login } from "./pages/login/Login";
import { AuthContextProvider } from "./Firebase/GoogleAuth";
import { AuthContextProvider2}  from "./Firebase/CorreoAuth";
import { Logincorreo } from "./Componentes/logincorreo";
import { Registrocorreo } from "./Componentes/Registrocorreo";
import { Restaurantes } from "./Componentes/restaurantes";
import { ComponenteMetodopago } from "./Componentes/ComponenteMetodopago";
import { AgregarDaviplata } from "./Componentes/AgregarDaviplata";
import { AgregarNequi } from "./Componentes/AgregarNequi";
import { Agregartarjeta } from "./Componentes/Agregartarjeta";
import { Componenteayuda } from "./Componentes/Componenteayuda";
import './assets/styles/variables.scss'
import './assets/styles/global.scss'

import { Componentgps } from "./Componentes/Componentegps";
import { Restaurante } from "./Componentes/Restaurante";


 const App=()=>{
    return(
        <div>
            <AuthContextProvider>
                <AuthContextProvider2>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/gps" element={<Componentgps/>}/>
                        <Route path="/Login" element={<Logincorreo/>}/>
                        <Route path="/Registro" element={<Registrocorreo/>}/>
                        <Route path="/Restaurantes" element={<Restaurantes/>}/>
                        <Route path="/MetodoPago" element={<ComponenteMetodopago/>}/>
                        <Route path="/AgregarTarjeta" element={<Agregartarjeta/>}/>
                        <Route path="/Nequi" element={<AgregarNequi/>}/>
                        <Route path="/Daviplata" element={<AgregarDaviplata/>}/>
                        <Route path="/Ayuda" element={<Componenteayuda/>}/>
                        <Route path="/Restaurante" element={<Restaurante/>}/>
                    </Routes>
                </AuthContextProvider2> 
            </AuthContextProvider>
           
        </div>
    )
    
}
export default App