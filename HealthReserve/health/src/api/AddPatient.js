import React, { useState } from 'react';
import './style.css' ;
import { useDispatch, useSelector } from 'react-redux';
import { postPatient } from './action';
import { ToastContainer, toast } from 'react-toastify';

export default function AddPatient() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [cin, setCin] = useState('');
  const [dateNaissance, setDateNaiss] = useState(Date);
  const [numerotele, setNumerptel] = useState('');
  const [couvertureSociale, setCouversociale] = useState('');
  const [dateRendzevous,setDateRendzevous] =useState(Date)
  const [urgent,setUrgent] = useState(false)
  const [sex,setSex] = useState("")

  const erreur = useSelector((state) => state.erreur);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data validation
    if (!nom || !prenom || !cin || !dateNaissance || !numerotele || !couvertureSociale ) {
      toast('Please fill in all fields');
      
      return;
    }

    dispatch(postPatient({ nom, prenom, cin, dateNaissance, numerotele, couvertureSociale,dateRendzevous,urgent,sex }));
  };
<ToastContainer/>
  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-5">
      <h1>Ajouter patient</h1>

      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom:
        </label>
        <input
          type="text"
          className="form-control"
          id="nom"
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">
          Prenom:
        </label>
        <input
          type="text"
          className="form-control"
          id="prenom"
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cin" className="form-label">
          CIN:
        </label>
        <input
          type="text"
          className="form-control"
          id="cin"
          onChange={(e) => setCin(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dateNaissance" className="form-label">
          Date Naissance:
        </label>
        <input
          type="date" className="form-control" id="dateNaissance" onChange={(e) => setDateNaiss(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="numerotele" className="form-label">
          Numero Telephone:
        </label>
        <input
          type="tel"
          className="form-control"
          id="numerotele"
          onChange={(e) => setNumerptel(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="couvertureSociale" className="form-label">
          Couverture Sociale:
        </label>
        <input type="text" className="form-control" id="couvertureSociale" onChange={(e) => setCouversociale(e.target.value)}/>
        
      </div>
      <div className="mb-3">
        <label htmlFor="dateNaissance" className="form-label">
          Date de rendez-vous:
        </label>
        <input
          type="datetime-local" className="form-control" id="dateNaissance" onChange={(e) => setDateRendzevous(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="couvertureSociale" className="form-label">
          urgent :
        </label>
        <input type="checkbox"  checked={urgent}  onChange={() => setUrgent(!urgent)}/>
        
      </div>
      <div className="mb-3">
        <label className="form-label">
          man :
        </label>
        <input type="radio" name="example-radio" value="man" onChange={(e=>setSex(e.target.value))}/>
        <label className="form-label">
          woman :
        </label>
        <input type="radio" name="example-radio" value="woman" onChange={(e=>setSex(e.target.value))}/>
      </div>
      
      


      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>

      {erreur ? <p className="text-danger mt-3">{erreur}</p> : null}
    </form>
    </div>
  );
}
