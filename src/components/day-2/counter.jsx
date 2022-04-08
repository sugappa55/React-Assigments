import { useState } from "react"

export const Counter=({value})=>{
 const [count,setCount]=useState(value)
 const handleChange=(val)=>{
     setCount(count+val)
 }

    return <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>handleChange(1)}>Add</button>
        <button onClick={()=>handleChange(-1)}>Dec</button>
        <button onClick={()=>handleChange(count)}>Double</button>
    </div>
}