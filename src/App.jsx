import React, { useEffect, useState } from 'react';
import { Thoughts } from './components/Thoughts';
import { getNewId, getTimer } from './helperFunctions';

function App() {
  const [thoughts, setThoughts] = useState([

  ]);

  function addThought (thought) {
    setThoughts(prevThoughts => [
      ...prevThoughts,
      thought
    ])
  }
  
  useEffect(()=>{
    setTimeout(()=>{
      setThoughts(prevThoughts => {
        if(prevThoughts && prevThoughts.length > 0) {
          return prevThoughts.slice(0,-1)
        }
        return prevThoughts
      })
    }, 5000)
  },[thoughts])
  

  return (
  <>
    <h1>Passing Thoughts</h1>
    <Thoughts thoughts={thoughts} addThought={addThought}/>
        {Array.isArray(thoughts) && thoughts.map(thought =>
          (
            <p key={thought.id}>{thought.text}</p>
          )
        )}
  </>
  )
}

export default App
