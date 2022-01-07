import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // note the standard syntax, a variable people, and handler setPeople
  // it looks like you can use React.useState and omit the { useState } in the React import at the top
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  } 

  return (
    <>
     {people.map((person) => {
      const {id, name } = person;
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      );
    })}
    <button className='btn' onClick={() => setPeople([])}>
      clear items
    </button>
  </>
  );
};
// with an empty array, the setPeople function simply clears the contents of people
// notice onClick function in the button starts with an arrow function, it crashes
export default UseStateArray;
