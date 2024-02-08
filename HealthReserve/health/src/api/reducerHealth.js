import * as type from './typeAction';

export function patientReducer(state = { patients: [], loading: false, erreur: "" }, action) {
  switch (action.type) {
    case type.FETCH_PATIENT_REQUEST:
      return { ...state, loading: true };

    case type.FETCH_PATIENT_SUCCESS:
      return { ...state, patients:  action.payload, loading: false, erreur: "" };

    case type.FETCH_PATIENT_FAILURE:
      return { ...state, erreur: action.payload, loading: false };

    case type.DELETE_PATIENT_SUCCESS:
      return { ...state, patients: state.patients.filter(p => p.id !== action.payload) };

    case type.DELETE_PATIENT_FAILURE:
      return { ...state, erreur: action.payload, loading: false };

    case type.POST_PATIENT_SUCCESS:
        return {...state,patients:[...state.patients,action.payload]}

    case type.POST_PATIENT_FAILURE:
        return {...state,erreur:action.payload,loading:false}

    default:
      return state;
  }
}
