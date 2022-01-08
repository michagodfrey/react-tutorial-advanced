import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // everytime the page loads (or some state changes as well?) useEffect runs
  useEffect(() => {
    console.log('call useEffect');
    if (value > 1) {
      document.title = `new messages(${value})`;
    }
  }, [value])
  // useEffect takes the parameter at the bottom, it wil be an array that in this case holds the variable value, and useEffect will only run when value changes
  // if you add an empty list after } and before ) i.e. }, []) at the end of the useEffect fucntion, it will only run on the initial render
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click</button>
    </>
  );
    
};

export default UseEffectBasics;
