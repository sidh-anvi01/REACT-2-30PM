// import React from 'react'
// import { useLocation } from 'react-router-dom'
// const AboutPage = () => {
//     const location=useLocation()
 
//     const user=location.state


//   return (
//     <div>
//       <h1>this is about </h1>
//       <h1>{user.name}</h1>
//     </div>
//   )
// }

// export default AboutPage



import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
    const location=useLocation()
const u=location.state
  return (
    <div>
        <h1>{u.name}</h1>
        <h1>{u.email}</h1>
        <h1>{u.phone}</h1>
        <h1>{u.website}</h1>
        <h1>{u.id}</h1>
      
    </div>
  )
}

export default AboutPage
