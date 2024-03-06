import { useRef, useState } from "react"

const Hooks6 = () =>{
    const refElement = useRef("");
    const[name,setName] = useState("Sania");
    console.log(refElement);
    function Reset(){
        setName("")
        
        refElement.current.focus();
       
        console.log("Reset function called");
    }
    function handleInput(){
        refElement.current.style.borderColor ="red";
        refElement.current.value="bano";
    }
    return(
        <>
        <h1>Hooks 6</h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>ColorChange</button>
        </>
        
    )
}
export default Hooks6