// import { createContext } from "react";

import { createContext } from "react";



// const UserContext=createContext()


// export default UserContext





 

const UserContext =createContext()



export function UserProvider({children}){
    const user={
        name:"rohan",
        age:22,
    }

 const showName=()=>{
    alert(user.name)
 }
 const showAge=()=>{
    alert(user.age)
 }


 return(
    <UserContext.Provider value={{user,showName,showAge}}>
{children}
    </UserContext.Provider>
 )

}


export default UserContext