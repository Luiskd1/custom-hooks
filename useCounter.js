import { useState } from "react"

export const useCounter = (initialValue = 10) => {
const [counter, setcounter] = useState(initialValue)
   
   const increment = (value) => {
    setcounter (counter+value);
   }
   const decrement = (value) => {
    if (counter ===1) return console.log("no hay nada");
    setcounter (counter-value);
   }
   const reset = () => {
    setcounter (initialValue);
   }

 
    return {
        counter, 
        increment,
        decrement,
        reset,

    }
}