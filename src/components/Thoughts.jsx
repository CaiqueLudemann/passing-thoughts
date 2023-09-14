import React from "react";

export function Thoughts(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.thought} onChange={props.handleInputChange}
        />
        <input type="submit" />
      </form>
      
    </>
  )
};