import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* here the ! operator changes show to its opposite */}
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {/* item displays if show is true */}
      {show && <Item />}
      {console.log(show)}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  // resize the window
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // cleanup function needed here since it takes up memory every time the button is toggled
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
      <div>
        <h1>window</h1>
        <h2>size: {size} px</h2>
      </div>
  );
};

export default ShowHide;
