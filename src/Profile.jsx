import React, { useState } from 'react'

export const Profile = (props) => {
    const [count,setCount]=useState(0)
    const { name, email, address } = props;

    return (
        <div style={{border:"2px solid black"}}>
            <h1> Functional Component</h1>
            <h1>Name:{name}</h1>
            <h1>Address:{address}</h1>
            <h1>Email:{email}</h1>
            <h1>Count-{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
