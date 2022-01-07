import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // the text, setText naming is a convention. The text holds the value contianed in useState, while setText is the handler that can change that value
  // setText is a function, while text is a variable
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if(text === 'random title') {
      setText('new title');
    } else {
      // note the syntax, setText = 'random title' doesn't work, must use brackets (). 
      setText('random title');
    }
    
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
