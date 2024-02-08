import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePatient, fetchPatient } from './action'

export default function ListePatient() {
    const dispatch=useDispatch()
useEffect(()=>{
dispatch(fetchPatient())

},[])
const patients=useSelector(state=>state.patients)
const erreur=useSelector(state=>state.erreur)
const loading=useSelector(state=>state.loading)
  return (
    <div>
        {loading && <p>chargement.......</p>}
        {erreur && <p style={{color:"red"}}>{erreur}</p>}
        {(loading==false && !erreur) &&<div>
            <table className="table">
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>cin</th>
                        <th>date de naissance</th>
                        <th>Numero tele</th>
                        <th>couvertureSociale</th>
                        <th>urgent</th>
                        <th>sex</th>


                    </tr>
                </thead>
                <tbody>
                    {patients.map((p)=>{
                        return(
                            <tr key={p.id}>
                                <td>{p.nom}</td>
                                <td>{p.prenom}</td>
                                <td>{p.cin}</td>
                                <td>{p.dateNaissance}</td>
                                <td>{p.numerotele}</td>
                                <td>{p.couvertureSociale}</td>
                                <td><input type='checkbox' checked={p.urgent} /></td>
                                <td>{p.sex}</td>
                                <td><button onClick={()=>dispatch(deletePatient(p.id))}>delete</button></td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
}
        
    </div>
    
  )
}
