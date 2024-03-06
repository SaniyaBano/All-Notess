import { Component } from "react";

const HOC1 = (InputComponent)=> class extends Component{
    render(){
        return(
            <div>
                 <h1>Hello</h1>
        <InputComponent name={"sania"}/>
        <InputComponent name={"bano"}/>
       
        </div>
        )
    }

}
export default HOC1;