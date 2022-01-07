import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // compare the 2 methods, thee is a delay in the value increase after the button is clicked. 
      // in (value +1), it doesn't matter how many times you click the button during the 2000ms delay, it will only increase by one
      // whereas in (prevState) => .. if you click the button multiple times it will go up by the number of clicks
      
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  }

  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
      </section>

      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
