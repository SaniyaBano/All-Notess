import { useState } from "react";
import HOC1 from "./HOC1";
const HOC2 = (props)=>{
  const[count,setCount] = useState(0);
    return(
        <>
        <h1>Hello HOC2 {props.name},{count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Me</button>
        </>
    )

}
export default HOC1(HOC2);