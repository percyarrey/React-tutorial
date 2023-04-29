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
import quesapi from './assets/index'
import reportWebVitals from './reportWebVitals';
import {nanoid} from "nanoid";
const root = ReactDOM.createRoot(document.getElementById('root'));
//components
let key=0;
let rand = [];
let score = 0;
function Getques(val) {
  if(val>50){
    val=50
  }
  let temprand;
  const quesbank = []
  temprand=Math.floor(Math.random()*quesapi.length)
  for(let i=0;i<val;i++){
    while (rand.indexOf(temprand)!=-1) {
      temprand=Math.floor(Math.random()*quesapi.length)
    }
    rand.push(temprand) 
    quesbank.push(quesapi[rand[rand.length-1]])
  }
  return quesbank;
}
function Dqans(props) {
    key+=1
  const [ans, setans] = React.useState({
    btn1:"btn btn-primary",
    btn2:"btn btn-primary",
    btn3:"btn btn-primary",
    btn4:"btn btn-primary",
    qnum:key
  })
  function handleclick(event) {
    const {name,outerText} = event.target
    if(ans.btn1=="btn btn-primary" & ans.btn2=="btn btn-primary" & ans.btn3=="btn btn-primary" & ans.btn4=="btn btn-primary"){
      setans(prev=>{
        if(outerText===props.correct){
          score+=1
        }
        return{
          ...prev,
          [name]:outerText===props.correct?"btn btn-success" :"btn btn-danger"
        }
      })
    }
    console.log(score)
  }
  return(
    <div>
      <div className='d-flex gap-5 fw-bold rounded-3 px-2 py-1  bg-dark bg-opacity-10 shadow-sm' style={{border:"1px solid #282c3452"}}>
      <div className='fs-4'>{ans.qnum}</div>  
      <div className='w-100'>
        <div className='fw-bold'>{props.question}
        </div>
        <div className='mt-1 d-flex justify-content-between'>
          <button name='btn1' onClick={handleclick} className={ans.btn1}>{props.answers[0]}</button>
          <button name='btn2' onClick={handleclick} className={ans.btn2}>{props.answers[1]}</button>
          <button name='btn3' onClick={handleclick} className={ans.btn3}>{props.answers[2]}</button>
          <button name='btn4' onClick={handleclick} className={ans.btn4}>{props.answers[3]}</button>
        </div>
      </div>
      </div>
    </div>
  )
}
function Showques() {
  const [upda,setupda]=React.useState(10)
  function Updatques(event) {
    const num =document.getElementById("num").value
    key=0
    score=0
    setupda(()=>{
      return(num)
    })
  }
  const quesbank= Getques(upda)
  const Updateques =quesbank.map(q=>{
    return (
      <div>
        <Dqans 
          key ={q.questionId}
          question={q.question}
          answers = {q.answers}
          correct = {q.correct}
        />
      </div>
    )
  })
  return(
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
          <div className="container-md">
          <a className="navbar-brand fw-bold" href="#">Quizapp</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className= "d-flex justify-content-end collapse navbar-collapse" id="collapsibleNavId">
              <input className="form-control w-25" type="number" placeholder="Number of Question" id='num' />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={Updatques}>Update</button>
          </div>
        </div>
      </nav>
      <div className=' container-lg'>
        <div className='d-flex flex-column gap-2 py-5'>
          {Updateques}
        </div>
      </div>
    </div>
  )
}
//Rendering
root.render(
  <div>
    <Showques />
    <div className=' d-flex justify-content-center'>
      <div>
      <div id='score' className='text-center text-primary fs-2'></div>
      <button onClick={()=>{
        document.getElementById("score").innerText=score
      }} className='btn btn-info w-100 p-4 mb-4 '>Get Result</button>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();