import React, { useState } from "react";
//Gli Hook Devono Iniziare con use
//Il componente in cui lo usiamo deve avere la prima lettera maiuscola on iniziare con use
//Hooks devo essere chiamati all'interno del corpo del componente
//Hooks non possono essere chiamati in maniera condizionale

const UsoBase = () => {
  /**
   * @type {[String, Function]} titolo
   */
  const [titolo, setTitolo] = useState("Hello World!!");
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);

  /**
   * Funzione che modifica il titolo al click
   * @returns {undefined}
   */
  const cambiaTitolo = () => {
    if (titolo === "Hello World!!") {
      setTitolo("React Magic!");
    } else {
      setTitolo("Hello World!!");
    }
  };
  return (
    <>
      <h2> {titolo}</h2>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={cambiaTitolo}
      >
        Cambiami
      </button>
    </>
  );
};

export default UsoBase;
