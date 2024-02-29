import React, { useEffect, useState } from 'react';
import './listuser.css';

const UserList = () => {
  const [rendezvous, setRendezvous] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetching rendezvous data when the component mounts
    fetch('http://localhost:3500/rendezvous')
      .then(response => response.json())
      .then(data => {
        // Assuming 'data' is an array of rendezvous, set it to the 'rendezvous' state
        setRendezvous(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredRendezvous = rendezvous.filter(v =>
    v.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.dateRendzevous.includes(searchQuery)
    
  );

  return (
    <div className="cards">
      <h2>Rendezvous List</h2>
      
      <div class="group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
    <input  type="search" class="input" placeholder="Search" value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)} />
</div>
      <ul>
        {filteredRendezvous.map((v) => (
          <li key={v.id} className="card green">
            <p className="Hover Me">Bonjour {v.nom} {v.prenom}</p>
            <p className="second-text">Date de rendez-vous: {v.dateRendzevous}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
