import React, { useState } from "react";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UsoBase = () => {
  const [titolo, setTitolo] = useState("Hello World!!");
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);

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
