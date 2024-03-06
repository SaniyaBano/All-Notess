import { Component, useRef } from "react";
import Counter from "./Counter";

const HOCComponent = (props) =>{
    const refElement = useRef("");
    function updateColor(){
        refElement.current.style.color=props.color;
    }
    function setColor(){
        refElement.current.style.color="";
    }
    
    return(
        <div>
        <h1 ref={refElement} onMouseOver={updateColor} onMouseLeave={setColor}>HOC Demo Component {props.name}</h1>
       
     </div>
    )
    
}
export default  Counter(HOCComponent);

