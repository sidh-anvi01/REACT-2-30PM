// import React from 'react'

// const UserPage = (props) => {
//   return (
//     <div>
//       <h1>hello props </h1>

//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.userName}</h1>
//     </div>
//   )
// }

// export default UserPage





// data destructring method 

import React from 'react'

const UserPage = ({name,age,userName,email}) => {
  return (
    <div>
         <h1>hello props </h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>userName of the user {userName}</h1>
      <h1>{email}</h1>
    </div>
  )
}

export default UserPage
