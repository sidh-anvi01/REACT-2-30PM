import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const UserScreen = () => {
    const name=useContext(UserContext)
  return (
    <div>
        <h1>this is the data shared by context </h1>
      <h1>{name}</h1>
    </div>
  )
}

export default UserScreen
