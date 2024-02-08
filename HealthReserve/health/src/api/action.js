import axios from "axios";
import * as type from './typeAction'



export function fetchPatient(){
    return function (dispatch,getState){
        console.log(getState)
        dispatch({type:type.FETCH_PATIENT_REQUEST})
        fetch("http://localhost:3500/rendezvous")
        .then(res=>res.json())
        .then(data=>dispatch({type:type.FETCH_PATIENT_SUCCESS,payload:data}))
        .catch(err=>dispatch({type:type.FETCH_PATIENT_FAILURE,payload:err.message}))

    }
}

export function deletePatient(id){
    return function (dispatch , getState) {
        const patient = getState().patients.find(v=>v.id===id)
        if(patient){
            axios.delete(`http://localhost:3500/rendezvous/${id}`)
            .then(() =>{
                dispatch({type:type.DELETE_PATIENT_SUCCESS,payload:id})
                })
            
            .catch(err=>dispatch({type:type.DELETE_PATIENT_FAILURE,payload:err.message}))

        }

    }
}

export function postPatient(patient) {
    return function(dispatch, getState) {
      
      dispatch({ type: "POST_PATIENT_REQUEST" });
  
      let p = axios.post('http://localhost:3500/rendezvous', patient);
      p.then((response) => {
        dispatch({type: type.POST_PATIENT_SUCCESS,payload: response.data})})
      .catch((error) => {dispatch({type: "POST_PATIENT_FAILURE",payload: error.message })});
      return p;
    };
  }

  

  




        
      
            
           


        
  
// ajouter un rendez-vous
export function addRdv(rdv) {
    return dispatch => {
        //envoi de la requete au serveur
        axios.post('http://localhost:3500/rendezvous',rdv)
        .then((response)=>{
            dispatch({type : type.ADD_RDV_SUCCESS, payload : response.
                data});
                })
                };
                }
                //modifier le rendez-vous
               export function updateRdv(id,rdv){
                    return dispatch =>{
                        axios.put(`http://localhost:3500/rendezvous
                        /${id}`,rdv).then(response =>
                            dispatch({type : type.UPDATE_RDV_SUCCESS, payload : id})
                            ).catch(error =>
                                console.log(error))
                                }}
                                //charger les rendez-vous d'un patient




