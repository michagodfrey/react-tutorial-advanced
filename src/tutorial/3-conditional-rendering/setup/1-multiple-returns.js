import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
// by multiple returns, it basically just means conditions within the function, so there are multiple things a function can return depending on the condition
const MultipleReturns = () => {
  // the isError/isLoading style is a convention when working with booleans
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login)
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
      <div>
        <h2>{user}</h2>
      </div>
    );
};

export default MultipleReturns;
