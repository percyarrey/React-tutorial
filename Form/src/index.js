import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Myform() {
  const [fdata, setfdata]= React.useState({
    fname:"",
    lname:"",
    pwd:"",
    email:"",
    employ:"",
    field:"",
    note:"",
    sendemail:false,
  })
  console.log(fdata)
  function formchange(event) {
    const {name,value,type,checked} =event.target
    setfdata(prev=> ({
      ...prev,
      [name] :type == "checkbox" ? checked : value
    }))
    
  }
  function handlesubmit(event) {
    event.preventDefault()
    //submitToApi(fdata)
  }
  return(
    <div className='rounded-4 shadow-lg p-4 bg-light' style={{border:"1px solid black"}}>
      <div className='d-flex justify-content-center'>
        <img src='/images/avatar.jpg' height={"90px"} width={"85px"} className='rounded-circle' />
      </div>
      <h3 className='text-center text-bold fw-bold text-primary'>Sign up</h3>
      <form onSubmit={handlesubmit} >
        {/* FirstName */}
        <nobr className='d-flex gap-2'><label htmlFor="fname" className="form-label fs-5">First name:</label>
        <input 
          type="text" 
          className="w-100 form-control" 
          style={{height:"2rem"}} 
          name="fname" 
          id="fname" 
          placeholder="First name" 
          onChange={formchange}
          value={fdata.fname}
          /></nobr>
        {/* LastName */}
        <nobr className='d-flex gap-2'><label htmlFor="lname" className="form-label fs-5">Last name:</label>
        <input 
          type="text" 
          className="w-100 form-control" 
          style={{height:"2rem"}} 
          name="lname" 
          id="lname" 
          placeholder="First name"  
          onChange={formchange}
          value={fdata.lname}/></nobr>
          {/* pwd */}
        <nobr className='d-flex gap-2'><label htmlFor="pwd" className="form-label fs-5">Password:</label>
        <input 
          type="password" 
          className="w-100 form-control" 
          style={{height:"2rem"}} 
          name="pwd" 
          id="pwd" 
          placeholder="First name"  
          onChange={formchange}
          value={fdata.pwd}
          /></nobr>
        {/* Email */}
        <nobr className='d-flex gap-2'><label htmlFor="email" className="form-label fs-5">Email:</label>
        <input 
          type="email" 
          className="w-100 form-control" 
          style={{height:"2rem"}} 
          name="email" 
          id="email" 
          placeholder="abc@mail.com"  
          onChange={formchange}
          value={fdata.email}/></nobr>
        {/* Radio */}
        <fieldset /* style={{border:"1px solid black"}}  */>
          <span className='fs-5'>Current employment status</span><br />
          <input 
              type={"radio"}
              id="unemployed"
              name='employ'
              className='ms-4'
              value="unemployed"
              checked={fdata.employ=="unemployed"} 
              onChange={formchange}
          />
          <label className='ms-2' htmlFor='unemployed'>Unemployed</label><br />
          <input 
              type={"radio"}
              id="parttime"
              name='employ'
              value="parttime"
              checked={fdata.employ=="parttime"}
              className='ms-4' 
              onChange={formchange}
          />
          <label className='ms-2' htmlFor='parttime'>Part-time</label><br />
          <input 
              type={"radio"}
              id="fulltime"
              name='employ'
              value="fulltime"
              checked={fdata.employ=="fulltime"}
              className='ms-4' 
              onChange={formchange}
          />
          <label className='ms-2' htmlFor='fulltime'>Full-time</label>
        </fieldset>
        {/* SELECT */}
        <label className='mt-3' htmlFor='techfield'>What is <b>Field</b> of Tech </label>
        <select 
        name='field'
        className='ms-4' 
        id="techfield" 
        onChange={formchange}
        value={fdata.field}
        >
          <option value="">    ---choose--</option>
          <option value="Web-developer">Web developer</option>
          <option value="app-developer">App developer</option>
          <option value="Graphic-designer">Graphic designer</option>
        </select><br />
        <textarea 
          placeholder='Any notes'
          name='note'
          className='mt-2 form-control'
          onChange={formchange}
        /><br />
        {/* Checkbox */}
        <input 
        className="form-check-input" 
        type="checkbox" 
        id="sendemail"
        name='sendemail'
        checked={fdata.sendemail}
        onChange={formchange}
        />
          <label className="ms-2 form-check-label" htmlFor="sendemail">
            Recieve <span className='fw-bold'>email</span> form Us
          </label><br />
        {/* Submit */}
        {<div className='d-flex justify-content-center mt-2'><button className='btn btn-primary'>Sign up</button></div>}
      </form>   
    </div>
  )
}
root.render(
  <div style={{minHeight:"100vh"}} className='bg-primary d-flex align-items-center justify-content-center'>
      <Myform />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (htmlFor example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();