import React ,{useState} from 'react';

export default function Sub() {
    const[number,setNumber]=useState("")
const [result,setResult]=useState("0")
  //handle change
function handlechange(event){
    setNumber(event.target.value)
}

//addtion
    function Add(){
let num=parseInt (number)
let num2= parseInt (result)
let addition=num+num2
setResult(addition)
    }

 function sub(){
    let num=parseInt (number)
    let num2= parseInt (result)
    let subtraction=num2-num
  setResult(subtraction)
 }

  return (
    <>
          
    <div className='container w-25 border my-5 p-3 mb-2 bg-body text-dark  border-dark' >
    <h4 > Enter value to add / Subtract</h4>
       <input onChange={handlechange} type="number" className='form-control  border-dark'value={number} ></input> <br/>
      
      <button onClick={Add} className='form-control btn btn-primary margin d-grid gap-3  border-dark'>Add</button><br/>
      <button onClick={sub} className='form-control btn btn-danger d-grid gap-3  border-dark'>Sub</button><br/>
     <h4 className='text-center'> Result</h4>
      <input className='form-control border border-dark fw-bold' type="text" disabled value={result} />
      
       </div>
    </>
  )
}