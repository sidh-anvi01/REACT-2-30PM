import React, { useState } from 'react'

const UseStateEx = () => {

    const[name,setName]=useState("rohan")
const[isClicked,setIsClicked]=useState(true)
const[count,setCount]=useState(0)
    console.log(name)  

const  result=!isClicked ? "this is clicked " :"this is not clicked "
console.log(result)


// setName("mmohan")


 const updateName=()=>{
    setName("mohan")
 }






// if(isClicked){
//     return "thi is user page "
// }




  return (
    <div>
      
      <h1>this is state. example </h1>
      <h1>{name}</h1>
 {/* {
    !isClicked ? <h1>hello  this is liked </h1> :<p>not linked </p>
 } */}

<h1>{count}</h1>


{
    isClicked && <p>hello</p>
}




<button onClick={updateName}>click </button>

<div style={{height:100,width:100,backgroundColor:isClicked?"blue" :"red"}}>

</div>



<button onClick={()=>setIsClicked(!isClicked)}>click </button>


    </div>
  )
}

export default UseStateEx
