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
import data from "./data";
const root = ReactDOM.createRoot(document.getElementById('root'));
  function Card(props){
    return(
      <div className='row'>
        <div className='col col-sm-3'>
          <img src={props.img} height={"100%"} width={"100%"} />
        </div>
        <div className='col col-sm-9'>
            <small className=''>
              <span className='lead'>{props.location}</span>
              <span className='ms-5 text-muted text-decoration-underline'>View on google map</span>
            </small>
            <h3 className='fw-bold'>{props.title}</h3>
            <small className='fw-bold'>
              <span className='text-muted'>{props.sdate}</span>
              <span className='text-muted'>- {props.edate}</span>
            </small>
            <p>
              {props.description}
            </p>
        </div>
      </div>
    )
  }
  function Header() { 
    return(
      <div className='bg-danger text-white text-center py-2 shadow-sm'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-europe-africa" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z"/>
          </svg></span> My travel journal
      </div>
    )
  }
  const Cards = data.map(item=>{
      return(
          <Card 
            key = {item.id}
            {...item}
          />
      )
  }) 
root.render(  
  <div className='mx-3 my-3 rounded-2 overflow-hidden' style={{maxWidth:"800px"}}>
    <Header />
    <div className='mt-3 d-flex flex-column gap-3'>
      {Cards}
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();