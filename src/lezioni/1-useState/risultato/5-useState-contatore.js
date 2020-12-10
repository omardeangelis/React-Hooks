import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const reset = () => {
    setContatore(0);
  };

  const dimContatore = () => {
    setContatore(contatore - 1);
  };

  const aumentaContatoreTemporale = () => {
    setTimeout(function () {
      //setContatore(contatore + 1);
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
