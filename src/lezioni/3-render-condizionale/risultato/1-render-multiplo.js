import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  /**
   * @type {[Boolean, Function]} Loading State
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @type {[Boolean, Function]} Error State
   */
  const [isError, setIsError] = useState(false);
  /**
   * @type {[Object, Function]} user Selezionato
   */
  const [user, setUser] = useState();

  /**
   * Fetcha Dati e modifica lo state user
   *
   * @async
   * @function getData
   * @returns {undefined}
   */
  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  /**
   * Al Primo Render del componente lancia la funzione getData
   */
  useEffect(() => {
    getData();
  }, []);

  //Se Lo State di isLoading è true ritorna il caricamento
  if (isLoading) {
    return <Loading />;
  }

  //Se si verifica un errore Ritorna Error Component
  if (isError) {
    return <ErrorComponent />;
  }

  //Se nessuna delle condizioni precednete è soddisfatta tutto è andato a buon fine
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "80px", height: "80px" }}
        className="rounded-circle my-4 shadow"
      ></img>
      <h3>{user.login}</h3>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading....</h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h2> Sorry, there is an Error</h2>
    </div>
  );
};

export default ConditionalCompining;
