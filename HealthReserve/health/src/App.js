import logo from './logo.svg';
import './App.css';

import Login from './pwd/login';
import AddPatient from './api/AddPatient';
import ListePatient from './api/ListePatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List2 from './api/List2';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path="/list" element={<List2 />}></Route>
        <Route path='/add' elemen={<AddPatient/>}></Route>
      </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
}

export default App;
