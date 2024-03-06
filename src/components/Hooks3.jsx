import { useMemo, useState } from "react"

const Hooks3 =()=>{

    const[count,setCount] = useState(0);
    const[item,setItem] = useState(10);
    const multiCount=function(){
        console.warn("multicount");
         return count*2;
    }
    const multiMemoFn = useMemo(()=>multiCount(),[count]);
    return(
        <div className="center">
        <h1>Count: {count}</h1>
        <h1>Item: {item}</h1>
        <h1>Count multiplied value: {multiMemoFn}</h1>
        <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        <button onClick={()=>{setItem(item+1)}}>Update Item</button>
        </div>
    )
}

export default Hooks3