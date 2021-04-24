import React, { useEffect, useState } from "react";
//useEffect viene lanciato dopo ogni re-render
//Lo use Effect ci permette di chiamare una clean up Function
//l secondo parametro descrive all'aggiornare di quali valori viene eseguito lo useEffect
const useEffectBasi = () => {
  /**
   * @type {[Number, Funtion]} valore del contatore
   */
  const [value, setValue] = useState(0);

  /**
   * Funzione aumentare il contatore
   * @return {undefined}
   */
  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  /**
   * useEffect modifica il titolo della nostra applicazione
   * in base al numero di contenuto all'interno del nostro state value
   */
  useEffect(() => {
    console.log("Eccomi, sono use Effect");
    if (value < 1) {
      document.title = `Nessun Messaggio`;
    } else {
      document.title = `Nuovo Messaggi: ${value}`;
    }
    return () => console.log("clean up function chiamata");
  }, [value]);
  return (
    <div className="item shadow">
      <h4>
        Value: <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
