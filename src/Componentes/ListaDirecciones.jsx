
import React from 'react';
import ubic from '../assets/images/direcciones/ubicacion.png'
import casa from '../assets/images/direcciones/casa.png'
import check from '../assets/images/direcciones/check.png'
import teclado from '../assets/images/direcciones/teclado.png'
import './ListaDirecciones.scss'

const ListaDirecciones = ({toggleDir}) => {
    return (
        <div className={`direcciones animate__animated ${toggleDir ? 'animate__fadeInUp': 'animate__fadeOutDown' } `}>
            <div className='py-4'>
            <h1 className='fw-bold' style={{color: '#8A68A5',fontSize: '30px', paddingLeft:'35px'}}>
                Escoge una dirección</h1>
            </div>
            <div className='line'></div>
            <ul className='dir-list'>
            <li className='dir-item mt-1 d-flex align-items-start'>
                <img src={ubic} className='ms-5 mt-4' /> 
                <h1 className='fw-regular ' 
                style={{color: '#8A68A5',fontSize: '23px', paddingLeft:'35px', paddingTop:'30px'}}>
                Ubicación actual</h1>
            </li>
            <li className='dir-item mt-1 d-flex align-items-start'>          
                <input className="form-check-input ms-5 mt-4" type="radio" name="radioNoLabel"
                id="radioNoLabel1" value="" aria-label="..."/>
                <h1 className='fw-regular ' 
                style={{color: '#8A68A5',fontSize: '23px', paddingLeft:'35px', paddingTop:'30px'}}>
                Direccion 1</h1>
            </li>
            <li className='dir-item mt-1 d-flex align-items-start'>          
                <input className="form-check-input ms-5 mt-4" type="radio" name="radioNoLabel"
                id="radioNoLabel1" value="" aria-label="..."/>
                <h1 className='fw-regular ' 
                style={{color: '#8A68A5',fontSize: '23px', paddingLeft:'35px', paddingTop:'30px'}}>
                Direccion 2</h1>
            </li>
            <li className='dir-item mt-1 d-flex align-items-start'>
                <img src={teclado} className='ms-5 mt-4' /> 
                <h1 className='fw-regular ' 
                style={{color: '#8A68A5',fontSize: '23px', paddingLeft:'25px', paddingTop:'30px'}}>
                Ingresa una dirección</h1>
            </li>
           

            </ul>
            
        </div>
    );
}

export default ListaDirecciones;
