import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo

let titolo = "Stretta la soglia, larga la via!"

const cambiaTitolo = () => {
  titolo = "Dividi et impera!"
  console.log(titolo)
};

const ErroreBase = () => {
  return <>
    <div>
      <h1>{titolo}</h1>
      <button type="button" className="btn btn-info mx-3" onClick={cambiaTitolo}>Cambia titolo</button>
    </div>;
  </>
};

export default ErroreBase;
