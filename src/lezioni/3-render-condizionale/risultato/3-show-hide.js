import React, { useState, useEffect } from "react";

const HideorShowComponent = () => {
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
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => {
        return oldValue + 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [contatore]);
  return (
    <div className="col-6 offset-3 p-2">
      <h4>{contatore}</h4>
    </div>
  );
};

export default HideorShowComponent;
