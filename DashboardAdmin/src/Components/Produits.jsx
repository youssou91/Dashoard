import { useState } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs'
import Modal from 'react-modal';


const Produits = () => {
  // Modal.setAppElement('#root'); // Assure que le modal est accessible pour les technologies d'assistance
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <main className="main-container">
      <div className="main-title">
        <h1><BsFillArchiveFill className='icon-entete' /> PRODUITS</h1>
        <button onClick={openModal} type='submit' className='bouton_Prod' >
          Nouveau Produit
        </button>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
          <button onClick={closeModal}>Fermer </button>
          <div className="myModal" >
            <div className="entete">
              <h3 className='titre'> Ajouter Employes </h3>
              <form className='row'>
                <div className='global'>
                  <div className='gauche'>
                    <div className="items">
                      <label htmlFor="inputName" className='form-label'>
                        <strong>Prenom & Nom :</strong>
                      </label>
                      <input type="text" id='inputName' placeholder="Entrer le Nom" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputEmail" className='form-label'>
                        <strong>Email :</strong>
                      </label>
                      <input type="email" id='inputEmail' autoComplete='off' placeholder="Entrer l'Email" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputPassword" className='form-label'>
                        <strong>Mot de pass :</strong>
                      </label>
                      <input type="password" id='inputPassword' placeholder="Entrer le  Mot de pass" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputSalaire" className='form-label'>
                        <strong>Salaire :</strong>
                      </label>
                      <input type="text" id='inputSalaire' placeholder="Entrer le Salaire" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputAdresse" className='form-label'>
                        <strong>Adresse :</strong>
                      </label>
                      <input type="text" id='inputAdresse' placeholder="Entrer l'Adresse" className="form-control"/>
                    </div>
                  </div>
                  <div className='droite'>
                    <div className="items">
                      <label htmlFor="inputTelephone" className='form-label'>
                        <strong>Telephone :</strong>
                      </label>
                      <input type="text" id='inputTelephone' placeholder="Entrer le Numero de telephone" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputCodePostal" className='form-label'>
                        <strong>Code postal :</strong>
                      </label>
                      <input type="text" id='inputCodePostal' placeholder="Entrer le code postal" className="form-control"/>
                    </div>
                    <div className="items">
                      <label htmlFor="inputCategorie" className='form-label'>
                        <strong>Service :</strong>
                      </label>
                      <select id="inputCategorie" className='form-select'>
                        <option value="">Choisir une categorie</option>
                        <option value="">Choisir une categorie</option>
                        <option value="">Choisir une categorie</option>
                        <option value="">Choisir une categorie</option>
                        
                      </select>
                    </div>
                    <div className="items">
                      <label htmlFor="inputImageFile" className='form-label'>
                        <strong> Selectioner une image :</strong>
                      </label>
                      <input type="file" name="image" id='inputImageFile' className="form-control  image"/>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <button type='submit' className="btn btn-primary w-100"> Ajouter Employe </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </main>
  )
}

export default Produits
