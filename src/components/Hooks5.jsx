import { useReducer } from "react";

const INCREMENT_COUNTER="Increment";
const DECREMENT_COUNTER="Decrement";
const initialState={count:0};
const reducer=((state=initialState.count,action)=>{
  switch(action){
    case INCREMENT_COUNTER:
      return state+1;
      case DECREMENT_COUNTER:
      
      return state-1;
      default:
      return state

  }

})
const Hooks5 = () =>{

  const[count,dispatch] = useReducer(reducer, initialState.count);

  return(
  <>
 <h1>{count}</h1>
  <button onClick={()=>dispatch("Increment")}>Increment</button>
  <button onClick={()=>dispatch("Decrement")}>Decrement</button>
  
  
  </>
  )
}
export default Hooks5;