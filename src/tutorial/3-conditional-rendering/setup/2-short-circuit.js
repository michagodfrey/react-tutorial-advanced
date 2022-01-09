import React, { useState } from 'react';
// short-circuit evaluation - && || operators
// ternary operator ? 
// if statements cannot be used in React

const ShortCircuit = () => {
  // give useState a value to see the changes in output and understand how the operators work
  const [text, setText] = useState('');
  // if text evaluates to true, display text, else display 'hello world'
  // const firstValue = text || 'hello world';
  // if text evaluates to true, display 'hello word'
  // const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false);


  return (
    <>
      {/* {<h1>{firstValue}</h1> */}
      {/* <h1>value: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      {/* the ! before he variable turns it to the opposite */}
      <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
      {text && <h1>john doe</h1>}
      {/* can also use ! operator */}
      {/* {!text && <h1>john doe</h1>} */}
      {isError && <h1>Error...</h1>}
      {/* if isError evaluates to true, next () else () after : */}
      {isError ? (
        <p>there is an error...</p> 
      ) : (
        <div>
          <p>there is no error</p>
        </div>
      )}
    </>
  );
  
};

export default ShortCircuit;
