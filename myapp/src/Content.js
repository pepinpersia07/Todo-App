import React from 'react'
import { useState } from 'react';

const Content = () => {
 const handleOneClick = () =>{
    alert("I'm Clicked");
  }
 const handleTwoClick = () =>{
    alert("I'm clicked");
  }
  const handleNameChange = () =>{
    const names= ["Bruno","Cyrus","Happy"];
    const num = Math.floor(Math.random()*3);
    return names[num];
  }

  const namee=()=>{
    console.log("I have been called inside a arrow function");
  }


  const [count,setCount] = useState(50);

  const [name,setName] = useState(()=>{namee()})



  

  const increment =()=>{
    setCount(()=>{return count + 1});
  }

  const decrement =()=>{
    setCount(()=>{return count - 1});
  }

  return (
    <div>
        <p onClick={handleOneClick}>Click Once</p>
        <p onDoubleClick={handleTwoClick}>Click Twice</p>
        <p>The favorite dog winner is {handleNameChange()}</p>
        <button onClick={handleNameChange}>Result</button>
        <p>Let's learn use state</p>
        <button onClick={increment}>+</button>&nbsp;&nbsp;
        <span>{count}</span>&nbsp;&nbsp;
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Content