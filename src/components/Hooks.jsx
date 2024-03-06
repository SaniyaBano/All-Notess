import { useEffect, useState } from 'react';

const Hooks = () => {

      const [color, setColor] = useState("red");
      const [count, setCount] = useState(0);
      useEffect(()=>{

            console.log("use Effect",color,count);
      },[color])

     const colorChange=()=>{
        setColor("blue")
     }
     const setDefault = () =>{
      setColor("red")
     }
     const setCountVal = () =>{
      setCount(count+1);
     }



      return (
            <>
                  <h1>Hello From Hooks Compo {color}, {count}</h1>
                  <button onClick={colorChange}>Change Color</button>
                  <button onClick={setDefault}>Set Again</button>
                  <button onClick={setCountVal}> setcount</button>
            </>
      )

};
export default Hooks;