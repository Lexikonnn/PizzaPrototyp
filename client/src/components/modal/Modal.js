import './Modal.css';
import { useState } from 'react';
import Btn from '../button/Btn';
import Car from '../../assets/car.png';

const Modal = ({onClose}) => {

    return (
        <>
                <div className='modal-container'>
                    <div className='overlay' onClick={onClose}>
                        <div className='modal-content'>
                            <img className='car-image' src={Car} alt='car' />
                            <h4 className='sl-title'>We are preparing your order!</h4>
                            <Btn ui="emerald" content="Done" onClick={onClose} />
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Modal;