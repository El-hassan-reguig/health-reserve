import React, { useEffect, useState } from 'react'
import { deletePatient } from './action';
import { useDispatch } from 'react-redux';

export default function List2() {
    const [list,setList] = useState([]);
    
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        load();
    },[])
    function load(){
        fetch('http://localhost:3500/rendezvous')
        .then(res=>{
            if(!res.ok){
                return false
            }
            return res.json();
        })
        .then(res=>{
            setList(res)
        })
    }
    
  
                    
  return (
    <div className='container'>
        <h1>Rendez-Vous</h1>
        <div className='card'>
            <div className='card-header'>
                <h1>Liste des rendez-vous</h1>

            </div>
            <div className='card-body'>
                <table class="table table-bordered">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Date de naissance</th>
                            <th scope="col">cin</th>
                            <th scope="col">numero tl</th>
                            <th scope="col">date de  rendez-vous</th>
                            <th scope="col">curto social</th>
                            <th scope="col">urgent</th>
                            <th scope="col">sex</th>
                            <th scope="col">supprimer</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {list && list.map(r=>(
                            <tr key={r.id}>
                                <td>{r.nom}</td>
                                <td>{r.prenom}</td>
                                <td>{r.dateNaissance}</td>
                                <td>{r.cin}</td>
                                <td>{r.numerotele}</td>
                                <td>{r.dateRendzevous}</td>
                                <td>{r.couvertureSociale}</td>

                                <td><input type='checkbox' checked={r.urgent} /></td>
                                <td>{r.sex}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>dispatch(deletePatient(r.id))}>Remove</button>

                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
