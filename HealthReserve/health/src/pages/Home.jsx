// Home.js
import React, { Fragment } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../icon/card.jpg';
import img1 from '../icon/card.jpeg';
import img2 from '../icon/contact.jpg'

const Home = () => {
    return (
        <Fragment>
     
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
  <div className="col-md-4">
    
   </div>
    <div class="card"> <img src={img2}className="img-fluid rounded-start" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-success">Make appointement</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img src={img1}className="img-fluid rounded-start" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-success">contact us</a>
      </div>
    </div>
  </div>
</div>

</Fragment>
    );
};

export default Home;
