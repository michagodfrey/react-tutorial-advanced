import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }
  
  useEffect(async () => {
    getUsers();
  }, []);
  // note the empty dependancy, would be in an infinte loop and crash without it, see lesson video

  return (
    <>
      <h2>fetch data</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return <li key={id}>
            <img src={avatar_url} alt="avatar" />
            <div>
              <h4>{login}</h4>
              <a>{html_url}</a>
            </div>
          </li>;
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
