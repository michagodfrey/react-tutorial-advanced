import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const handleResize = () => {
    setSize(window.innerWidth);
  }

  // the purpose of using a return and clean up is because without it data would keep building up in the browser and it would crash.
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
