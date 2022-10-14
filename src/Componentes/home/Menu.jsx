import React from 'react'
import './Menu.scss'
import imageUser from 'assets/images/usuario.png'

export const Menu = ({toggleMenu}) => {
  return (
    <div className={`menu-home animate__animated ${toggleMenu ? 'animate__slideInRight': 'animate__slideOutRight' } `}>
        <ul className='menu-list'>
            <li className='menu-item mt-5 d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Tu Cuenta </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Tus pedidos </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Métodos de pago </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Centro de ayuda </span>
            </li>
            <li className='menu-item d-flex align-items-start'>
                <img src={imageUser} className='mb-3' /> <span className='ms-3 mt-3'> Cerrar sesión </span>
            </li>
        </ul>
    </div>
  )
}
