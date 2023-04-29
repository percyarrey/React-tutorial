import logo from './logo.svg';
import './App.css';
import Card from "./component/card"
import React from 'react';
let pagenum=1
let head=  "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page="
function App() {
  function prefxn(){
    pagenum -=1
    head=""
    head="https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page="+pagenum
  }
  function nextfxn(){
    setcomp([])
    pagenum +=1
    head=""
    head="https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page="+pagenum
    console.log(head)
    }
  const [comp,setcomp] = React.useState([...Array(9)].map((_,i)=>(
    <Card 
      key={i} 
      myid={i}
      head = {head}
    />
  )))
  return (
    <div className="App">
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand fw-bold" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0"></ul>
              <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {/* Body */}
      <div className=' container-md mt-4'>
        {comp}
        <div className='mt-3 mb-5 container d-flex justify-content-between'>
          <button onClick={prefxn} className='btn btn-primary btn-lg'>Previous</button>
          <button onClick={nextfxn} className='btn btn-primary btn-lg'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
