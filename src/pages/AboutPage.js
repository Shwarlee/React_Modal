//Nom du fichier : src/pages/AboutPage.js
import React, { useState } from 'react';
//import './AboutPage.css';
import Fuji from '../fuji.jpg';
import Modal from '../components/shared/Modal.js';

const AboutPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setModalActive(!modalActive);
  }

  return (
    <>
      <div className="about-wrapper">
        <h2>About...</h2>
       <img src={Fuji} alt="Mount Fuji - Japan"/>
        <p>Lorem ipsum...</p>
        <p>
          <button 
            type="button" 
            className="link" 
            onClick={toggleModal}
          >
            Cras finibus nulla
          </button>
        </p>
      </div>
      { modalActive ? 
        <Modal>
  <h2>Le titre de la modale</h2>
  <p>
    Du contenu textuel <strong>affiché</strong> dans la <u>modale</u>.
  </p>
</Modal>: null }
    </>
  );
}

export default AboutPage;