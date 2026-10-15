// import React, { useContext } from 'react'
// import UserContext from '../context/userContext'

// const UserScreen = () => {
//     // const name=useContext(UserContext)
//   return (
//     <div>
//         <h1>this is the data shared by context </h1>
//       {/* <h1>{name}</h1> */}
//     </div>
//   )
// }

// export default UserScreen



import React, { useContext } from 'react'
import UserContext from '../context/userContext' 
const UserScreen = () => {
  const {user,showName,showAge}=useContext(UserContext)
  return (
    <div>
      <h1>hello user </h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button onClick={showName}> click</button>
      <button onClick={showAge}> click</button>
      
    </div>
  )
}

export default UserScreen
