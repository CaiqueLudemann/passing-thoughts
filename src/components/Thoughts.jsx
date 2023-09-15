import React, { useState } from "react";
import { getNewId, getTimer } from "../helperFunctions";

export function Thoughts(props) {
  const [text, setText] = useState('')
  function handleInputChange({target}){
    setText(target.value)
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.addThought({
      id: getNewId(),
      text: text,
      expiration: getTimer()
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange}
        />
        <input type="submit" />
      </form>
    </>
  )
};