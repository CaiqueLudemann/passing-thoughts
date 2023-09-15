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
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if (temporaryThoughts) {
  //       setTemporaryThoughts(prevTemporaryThoughts=>{
  //         prevTemporaryThoughts.pop();
  //     })
  //     }
  //   }, 5000)
  // },[temporaryThoughts])
  

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
