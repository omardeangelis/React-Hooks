import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  /**
   * @type {[[Object], Function]} Lista di User
   */
  const [users, setUsers] = useState([]);

  /**
   * Fetcha i fati utilizzando la libreria axios
   * Inserisce i valori all'interno dello state
   * @returns {undefined}
   */
  const getData = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
  };

  //Fetcha i dati solo al primo render
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchComponent;
