import react from "react";
export default function Card(props) {

    return(
      <div className='col col-sm-6 col-md-4 col-lg-3 shadow-sm'>
        <div className="card">
          <img src={props.image} height={"140rem"} className='card--image' />
          <div className="card-body">
              <div className='card-title'>
                <span className='text-danger'>✔ </span>
                <span>{props.rating}</span> 
                *<span>{props.ctry}</span>
              </div>
              <p className="card-text text-black-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
                From 
                <span> {props.amt} </span> 
                person
              </div>
          </div>
      </div>
      </div>
    )
  }