import { Component, useState } from "react";
import HOCComponent from "./HOCComponent"

const Counter = (InputComponent) => class extends Component{
   
   render(){
    return(
        <>
        
        <InputComponent color={"red"} />
        <InputComponent color={"pink"} />
        <InputComponent color={"green"} />
        <InputComponent color={"yellow"} />
        </>
    )
   }
   
    

}
export default Counter;
