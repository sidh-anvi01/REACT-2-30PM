// import React, { useRef } from 'react'

// const UseRefEx = () => {
// const inputRef=useRef(null)


// const handelFocus=()=>{
// inputRef.current.focus() 
// }



//   return (
//     <div>
//         <h1>this is useRef class </h1>

//       <input
//       ref={inputRef}
//        placeholder='enter value' />
// <button onClick={handelFocus}>focus </button>

//     </div>
//   )
// }

// export default UseRefEx







import React, { useEffect, useRef, useState } from 'react'

const UseRefEx = () => {
    const [count, setCount] = useState(0)
    const previCount = useRef()


    useEffect(() => {
        previCount.current = count
    }, [count])

    return (
        <div>
            <h1>{count}</h1>

            <h1>prev:{previCount.current}</h1>

            <button
                onClick={
                    () => setCount(count + 1)
                }
            >click</button>
        </div>
    )
}

export default UseRefEx
