// import React, { useMemo, useState } from 'react'

// const UseMemeoEx = () => {
// const [number,setNumber]=useState(0)
// const [count,setCount]=useState(0) 

// const  result=useMemo(()=>{
//     return number*number 

// },[number])


//   return (
//     <div>
//         <h1>this is usememo class </h1>
//         <h1>{number}</h1>
//         <h1>{result}</h1>
//         <button onClick={()=>setNumber(number+1 )}>click</button>

// <h1>{count}</h1>

//         <button onClick={()=>setCount(count+1 )}>click</button>

//     </div>
//   )
// }

// export default UseMemeoEx





// // const result=useMemo(()=>{
// //   return calaculation

// // },[depenedencies])




// next exmaple: 


// import React, { useMemo, useState } from 'react'

// const UseMemeoEx = () => {
//     const [search, setSearch] = useState("")


//     const num = [
//         "1",
//         "2", "3", "4", "5", "6",
//     ]

//     const fillterData=useMemo(()=>{
//         console.log("searching...")
//         return num.filter((n)=>{
//             n.
//         })
//     })

//     return (
//         <div>
//             <h1>search use r</h1>


//             <input type="text"
//                 value={search}
//                 onChange={
//                     (e) => setSearch(e.target.value

//                     )}
//                 name="" id="" />

//             <ul>

//             </ul>

//         </div>
//     )
// }

// export default UseMemeoEx




import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const UseMemeoEx = () => {
  const name=useContext(UserContext)
  return (
    <div>
      <h1>this is useMemo screen</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default UseMemeoEx
