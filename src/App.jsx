
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  
  function handleClick(){
    alert('hello')
  }
  
  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
     
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <div style={{border: '2px solid black',borderRadius: '15px',margin: '10px',padding: '10px',display:'flex',    justifyContent: 'center',gap: '10px'}}>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third click')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
      </div>
      
    </>
  )
}
export default App
