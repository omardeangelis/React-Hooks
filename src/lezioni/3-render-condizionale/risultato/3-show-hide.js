import React, { useState, useEffect } from "react";

const HideorShowComponent = () => {
  /**
   * @type {[Boolean, Function]} Show State
   */
  const [show, setShow] = useState(false);
  return (
    <div className="card shadow mt-5 p-5 ">
      <button
        className="button w-50 col-6 offset-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        {show ? "nanscondi" : "mostra"}
      </button>

      <h1 className="my-3">{show && <Elemento />}</h1>
    </div>
  );
};

const Elemento = () => {
  /**
   * @type {[Number, Function]} Show State
   */
  const [contatore, setContatore] = useState(0);

  /**
   * Modifica il contatore ogni 1000 millisecondi
   * ritorna una clean up function
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => {
        return oldValue + 1;
      });
    }, 1000);

    //Permette bloccare il TimeOut quando si modifica il contatore in maniera manuale
    return () => clearTimeout(timer);
  }, [contatore]);
  return (
    <div className="col-6 offset-3 p-2">
      <h4>{contatore}</h4>
    </div>
  );
};

export default HideorShowComponent;
