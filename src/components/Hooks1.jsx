import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const Hooks1 = ()=>{
    const [user,setUser]= useState("Sania");

     return(
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
         <Comp1/>
        </UserContext.Provider>
     )
}
const Comp1 = ()=>{
  return(
    <Comp3 />
  )
}
const Comp2 = ()=>{
    
}
const Comp3 = ()=>{
    const user = useContext(UserContext);
    return(
        <h1>Hello {user} again!!!</h1>
    )
    
}
export default Hooks1;