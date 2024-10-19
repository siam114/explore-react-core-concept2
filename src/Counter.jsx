import { useState } from "react"

function Counter() {
    const [count,setCount] = useState(0);
    
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }   

    const handleReduce = () => {
        const newcount = count - 1;
        setCount(newcount)
    } 
  return (
    <div style={{border: '2px solid red',borderRadius: '15px',padding: '10px',margin: '10px'}}>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter
