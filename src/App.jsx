import React, { useEffect, useState } from 'react';
import { Thoughts } from './components/Thoughts';

function App() {
  const [thought, setThought] = useState("");
  const [temporaryThoughts, setTemporaryThoughts] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      if (temporaryThoughts) {
        setTemporaryThoughts(prevTemporaryThoughts=>{
          prevTemporaryThoughts.pop();
      })
      }
    }, 5000)
  },[temporaryThoughts])
  

  function handleInputChange({target}) {
      setThought(target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setTemporaryThoughts(prevTemporaryThoughts => [
       prevTemporaryThoughts,
       thought
    ])
  }
  return (
  <>
    <h1>Passing Thoughts</h1>
    <Thoughts 
    handleInputChange={handleInputChange} 
    handleSubmit={handleSubmit}
    />
     {temporaryThoughts && temporaryThoughts.map(tempThought =>
       (
        <p>{tempThought}</p>
      )
    )}

  </>
   
  )

  
}

export default App
