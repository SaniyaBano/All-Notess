import { useEffect, useState } from "react"

const Child = ({getItems}) =>{
    const[items,setItems] = useState([]);
   useEffect(()=>{
    setItems(getItems())
    console.log(items);
   },[getItems])
    return(
        <>
       <h1>Child Component</h1>
       {items && items.map(item=>{
        return <div key={item}><h1>{item}</h1></div>
       })}
        </>
    )
}
export default Child;