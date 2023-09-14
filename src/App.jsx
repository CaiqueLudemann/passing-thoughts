import React, { useState } from 'react';
import { Thoughts } from './components/Thoughts';

function App() {
  const [thought, setThought] = useState("");
  const [temporaryThoughts, setTemporaryThoughts] = useState([]);
  

  function handleInputChange({target}) {
      setThought(target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setTemporaryThoughts(prevTemporaryThoughts => [
       ...prevTemporaryThoughts,
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
        <p key={temporaryThoughts.indexOf(tempThought)}>{tempThought}</p>
      )
    )}

  </>
   
  )

  
}

export default App
