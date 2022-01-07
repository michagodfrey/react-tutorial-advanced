import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () => {
    // setPerson('changed message') // would change person from an object to and array and wipe out all the data
    // setPerson({message: 'hello world'}) // changes the message to 'hello world' but wipes out the rest of the data
    // the solution is to use the spread operator ...person, which copies the values of person and then changes only message in this instance. 
    // the spread operator is necessary for objects
    setPerson({ ...person, message: 'hello world'});
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
