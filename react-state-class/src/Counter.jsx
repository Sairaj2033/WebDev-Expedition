import { useState } from "react";

function init() {
  console.log("init was called");
  return Math.random();
}

export default function Counter() {
//    let[statevariable, setStateVariable] = useState(10);
       let[count, setCount] = useState(init());  
       console.log("component was re-rendered"); 
     // console.log("Component is rendered");
     // console.log(`count = ${count}`);



       let inCount = ()=> {
         setCount((currCount) => {
           return  currCount + 1;
         });

        //  setCount((currCount) => {
        //    return  currCount + 1;
        //  });
           }
  
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount} >Increase Count</button>
        </div>
    );
}