import logo from './logo.svg';
import blog from './assets/blog02.png'
import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  function Body() {
    return(
      <div className='rot2 bg-secondary d-flex rounded-2  justify-content-center align-items-center' style={{width:"26rem",height:"43rem"}}>
        <div class="rot card overflow-hidden shadow-lg bg-dark text-white rounded-3" style={{width:"20rem"}}>
          <img src={blog} class="card-img-top" height={'170rem'} alt="..."/>
          <div class="card-body">
            <div className='text-center'>
              <div class="card-title text-center fw-bold"><span className='fs-1'>Percy Arrey</span>
                <br></br><small className='text-muted'>Frontend Developer</small><br></br>
                <small className='text-muted'>Tanyitikuarrey@gmail.com</small>
              </div>
              
            </div>
            <div className='mt-4 d-flex justify-content-around'>
              <button className='btn-light btn px-5'>Email</button>
              <button className='btn-primary btn px-4'>LinkedIn</button>
            </div>
            <div className='mt-4'>
              <h6 className='fw-bold'>About</h6>
              <p className='text-white-50'> hflasdflasdfasdfklasdfkaksdfkakasdfaafadhjasdfkasdfljasdfhjasdfhjadfkaasdfhjasdfasdfka
              </p>
            </div>
            <div className='mt-4'>
              <h6 className='fw-bold'>Interest</h6>
              <p className='text-white-50'> hflasdflasdfasdfklasdfkaksdfkakasdfaafadhjasdfkasdfljasdfhjasdfhjadfkaasdfhjasdfasdfka
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
    <Body />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();