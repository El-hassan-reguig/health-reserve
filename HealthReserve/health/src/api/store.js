import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; 
import {thunk} from 'redux-thunk'
import { patientReducer } from "./reducerHealth";

export const store=createStore(patientReducer,applyMiddleware(thunk))