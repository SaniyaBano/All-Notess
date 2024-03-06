import { useCallback, useState } from "react";
import Child  from "./Child";

const Hooks4 = () =>{
    const[countone,setCountOne] = useState(0);
    const[counttwo,setCountTwo] = useState(0);
   
    const getItems=useCallback(()=>{
        console.log('get items');
        return [counttwo+1,counttwo-1]
    },[counttwo])
    return(
        <>
        <h1>CountOne: {countone}</h1>
        <h1>CountTwo: {counttwo}</h1>
        <button onClick={()=>setCountOne(countone+1)}>CountOne</button>
        <button onClick={()=>setCountTwo(counttwo+1)}>CountTwo</button>
        <Child getItems={getItems}/>
        </>
       

    )

}
export default Hooks4