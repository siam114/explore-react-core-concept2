import { useEffect, useState } from "react"

function Users() {
    const [users,setUsers] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
  return (
    <div>
      <h3>Users : {users.length}</h3>
    </div>
  )
}

export default Users



/*
1. declare a state to hold the data
2.useEffect with call back and dependency
3.use fetch to load data
*/