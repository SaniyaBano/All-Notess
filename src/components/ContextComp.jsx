import React,{Component} from "react"


const { Provider, Consumer } = React.createContext();
const C1 = React.createContext();
class ContextComp extends Component{
   render(){
    return(

        <h1>REF- {this.context}</h1>

    )
   }
}
ContextComp.contextType = C1;
export default ContextComp