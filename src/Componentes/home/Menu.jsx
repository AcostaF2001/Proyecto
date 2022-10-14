import React from 'react'
import './Menu.scss'
import imageUser from 'assets/images/usuario.png'
import Pedidos from 'assets/images/Pedidos.png'
import Pago from 'assets/images/Pago.png'
import Help from 'assets/images/Help.png'
import Cerrar from 'assets/images/Cerrar.png'
import { useNavigate } from 'react-router-dom'

export const Menu = ({toggleMenu}) => {

  const navigate=useNavigate()

  const historial=()=>{
    navigate("/Historial")
  }

  const MetodoPago=()=>{
    navigate("/MetodoPago")
  }
  const help=()=>{
    navigate("/Ayuda")
  }
  return (
    <div className={`menu-home animate__animated ${toggleMenu ? 'animate__slideInRight': 'animate__slideOutRight' } `}>
        <ul className='menu-list'>
            <li className='menu-item mt-5 d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Tu Cuenta </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={Pedidos} className='mb-3' onClick={historial}/> <span className='ms-3 mt-3' onClick={historial}> Tus pedidos </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={Pago} className='mb-3'onClick={MetodoPago} /> <span className='ms-3 mt-3' onClick={MetodoPago}> Métodos de pago </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={Help} className='mb-3' onClick={help}/> <span className='ms-3 mt-3' onClick={help}> Centro de ayuda </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={Cerrar} className='mb-3' /> <span className='ms-3 mt-3'> Cerrar sesión </span>
            </li>
        </ul>
    </div>
  )
}
