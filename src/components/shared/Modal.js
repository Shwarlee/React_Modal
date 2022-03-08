//Nom du fichier : src/components/shared/Modal.js
import React from 'react';
//import './Modal.css';
import Button from './Button';

//Nom du fichier : src/components/shared/Modal.js
const Modal = ({ children }) => {
    return (
      <div className="modal-wrapper">
        <div className="modal-box">
          {children}
        </div>
      </div>
    );
  }
export default Modal;