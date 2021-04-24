import React, { useState } from "react";

const CounterComponent = () => {
  /**
   * @type {[Number, Funtion]} contatore
   */
  const [contatore, setContatore] = useState(0);

  /**
   * Funzione per azzerrare il contatore
   * @return {undefined}
   */
  const reset = () => {
    setContatore(0);
  };

  /**
   * Funzione per diminuire il valore del contatore
   * @return {undefined}
   */
  const dimContatore = () => {
    setContatore(contatore - 1);
  };

  /**
   * Funzione per aumentare il contatore dopo 2000 millisecondi
   * @return {undefined}
   */
  const aumentaContatoreTemporale = () => {
    setTimeout(function () {
      setContatore((oldValue) => {
        return oldValue + 1;
      });
    }, 2000);
  };
  return (
    <div className="bg-white shadow rounded p-5 w-75 col-6 offset-3">
      <h3>{contatore}</h3>
      <div className="d-flex justify-content-between">
        <button className="button my-2" onClick={dimContatore}>
          {" "}
          Diminuisci{" "}
        </button>
        <button className="button my-2" onClick={aumentaContatoreTemporale}>
          {" "}
          Aumenta{" "}
        </button>
      </div>
      <button className="button reset-button" onClick={reset}>
        Resetta
      </button>
    </div>
  );
};

export default CounterComponent;
