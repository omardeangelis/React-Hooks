import React, { useRef, useEffect, useState } from "react";

const RefExample = () => {
  /**
   * @type {[Number, Function]} Posizione
   */
  const [posizione, setPosizione] = useState(0);

  /**
   * @type {Object}
   */
  const titolo = useRef(null);

  /**
   * @type {Object}
   */
  const inputRef = useRef(null);

  /**
   *  Gestisce il submit del form
   * @param {Event} e
   * @listens document#submit
   */
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  //Modifica la posizione al modificare la costante Titolo
  useEffect(() => {
    setPosizione(titolo.current.getBoundingClientRect());
  }, [titolo]);
  return (
    <div>
      <h2 ref={titolo} className="ml-1 mt-5">
        {" "}
        Titolo Titolo
      </h2>
      <h4
        style={{
          position: "absolute",
          left: posizione.left,
          top: `${posizione.top + 400}px`,
        }}
      >
        Posizione
      </h4>
      <form onSubmit={handleSumbit}>
        <input type="text" ref={inputRef} />
        <button className="button" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
