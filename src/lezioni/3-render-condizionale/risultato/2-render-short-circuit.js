import React, { useState } from "react";
//Javascript Short Circuit evaluation
//Operatore Ternario
const ShortRender = () => {
  const [parola, setParola] = useState("Sono una Parola");
  const [toggle, setToggle] = useState(false);
  //const esempio = parola || "sono un esempio";
  return (
    <div>
      <h2>{parola || "Uso un Esempio se non è inserito un valore"}</h2>
      {/* {toggle ? "vero" : "falso"} */}
      {toggle ? (
        <h2 className="text-success"> Vero </h2>
      ) : (
        <h5 className="text-danger"> Falso</h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        {" "}
        {toggle ? "falso" : "vero"}{" "}
      </button>
    </div>
  );
};

export default ShortRender;
