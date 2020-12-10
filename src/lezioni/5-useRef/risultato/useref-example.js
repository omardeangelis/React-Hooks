import React, { useRef, useEffect, useState } from "react";

const RefExample = () => {
  const [posizione, setPosizione] = useState(0);
  const titolo = useRef(null);
  const inputRef = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    setPosizione(titolo.current.getBoundingClientRect());
  }, [titolo]);
  return (
    <div>
      <h2 ref={titolo} className="ml-5 mt-5">
        {" "}
        UseRef component
      </h2>
      <h4
        style={{
          position: "absolute",
          left: `${posizione.left - 50}px`,
          top: `${posizione.top + 400}px`,
        }}
      >
        {" "}
        Posizione{" "}
      </h4>
      <form onSubmit={handleSumbit}>
        <input type="text" ref={inputRef}></input>
        <button className="button" type="submit">
          {" "}
          Invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
