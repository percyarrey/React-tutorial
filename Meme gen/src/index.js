import logo from './logo.svg';
import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from "./data";
const root = ReactDOM.createRoot(document.getElementById('root'));
function rand() {
  let j=Math.floor(Math.random()*data.length)
  return j
}

// Meme Component
function Comp() {
  let j =rand()
  const url = data[j].img
  const [img, imgfunc] = useState({
    randimg: url,
    toptext:"",
    bottext:""
  })
  function updatetext(event) {
    imgfunc(prev =>({
      ...prev,
        [event.target.name] : event.target.value
    }))
  }
  return(
    <div className='container mt-4 w-100'>
      <div className='w-100 d-flex justify-content-between'>
          <input onChange={updatetext} type="text" className='rounded' name="toptext" id="" aria-describedby="helpId" placeholder="Top Text" />
          <input onChange={updatetext} type="text" className='rounded' name="bottext" id="" aria-describedby="helpId" placeholder="Bottom Text" />
      </div>
      <div className='mt-4'>
        <input name="" id="" onClick={() =>{
           let m=rand()
          imgfunc(prevstate =>({
            ...prevstate,
              randimg:data[m].img
          }))
          }} className=" w-100 btn btn-outline-primary" type="button" value="Change Image" />
      </div>
      <h2 style={{height:"0",top:"1rem",position:"relative",zindex:"1"}} className='bg-light text-center text-uppercase fw-bold'><span className='bg-light rounded-1 px-2'>{img.toptext}</span></h2>
      <div className='mt-2' style={{height:"30rem"}}>
        <img src={img.randimg} className='w-100 h-100' />
      </div>
      <h2 style={{height:"0",top:"-2.5rem",position:"relative",zindex:"1"}} className='bg-light text-center text-uppercase fw-bold'><span className='bg-light rounded-1 px-2'>{img.bottext}</span></h2>
    </div>
  )
}
root.render(
  <div className='mx-md-3 mx-lg-5 my-md-3'>
        <header className='bg-danger py-3 text-white'>
          <nav className='container d-flex align-items-center justify-content-between' >
            <div className='nav-brand fs-4 fw-bold'>
              <img src='/logo192.png'  height={"35rem"}/>
              Meme Generator
              </div>
            <small className=''>React Course-Project 3</small>
          </nav>
        </header>
      <Comp />
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();