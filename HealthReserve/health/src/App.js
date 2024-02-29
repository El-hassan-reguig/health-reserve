
import './App.css';

import Login from './pwd/login';
import AddPatient from './api/AddPatient';
import Navbar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List2 from './api/List2';
import AddUser from './api/addUser';
import UserList from './api/listUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter><Navbar />
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

      
        
      
        
      

        <Route path='/login' element={<Login />}></Route>
        <Route path="/list" element={<List2 />}></Route>
        <Route path='/add' elemen={<AddPatient/>}></Route>
        <Route path='/user' element={<AddUser/>}></Route>
        <Route path='/userlist' element={<UserList/>}></Route>
      </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
}

export default App;
