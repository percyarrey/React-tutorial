import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./component/card";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  function Header() {
    return(
      <nav className='shadow-sm d-flex align-items-center' style={{color:"#BE5442"}}>
        <div className=' container'>
          <span className=' display-2 h1 fw-bold lead mx-1'>A</span><span className='mb-1' style={{fontFamily:'Helvetica Neue'}}>airbnb</span>
        </div>
      </nav>
    )
  }
  function Body() {
    return( 
      <div>
        <div className='myimg' style={{height:"20vw"}}>
        </div>
        <div  className='container' style={{position:"relative",top:"-5rem"}}>
            <div className='row'>
            <div className='col-6'>
              {<div className='h1 fw-bold'>Online Experiences</div>}
              <p>afskjdl dldl dldldldl dldld ldld ldldld ldldldldl dlasfjkldff fffffffff ffff  ff ffff ffff fffff fffffff ffffffff afsdfa erwe</p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row gx-3 gy-3'>
            <Card 
              image='/images/blog01.png'
              rating="5.0(6)"
              ctry="USA"
              amt="136"
            />
            <Card  
              image='/images/blog02.png'
              rating="6.0(6)"
              ctry="CANADA"
              amt="300"
            />
            <Card  
              image='/images/blog03.png'
              rating="7.0(6)"
              ctry="PUTIN"
              amt="16"/>
            <Card  
              image='/images/blog04.png'
              rating="8.0(6)"
              ctry="F YOU"
              amt="13"/>
         </div>
        </div>    
      </div>
    )
  }
  function Footer() {
    return(
      <div className='mt-auto bg-dark py-2 text-center fw-bold'><small>&copy; Percy developement. All right Reserved</small></div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Body />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();