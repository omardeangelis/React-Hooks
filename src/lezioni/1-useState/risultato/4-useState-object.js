import React, { useState } from "react";

const StateObject = () => {
  //fare l'esempio settando mulitpli useState
  // const [name,setName] = useState('dario')
  // const [age,setAge] = useState(24)
  // const [saluto,setSaluto] = useState('ciao')

  const [person, setPerson] = useState({
    name: "dario",
    age: 24,
    saluto: "Ciao",
  });

  const cambiaSaluto = () => {
    setPerson({ ...person, saluto: "ho fatto gli anni", age: 25 });
  };
  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="button" onClick={cambiaSaluto}>
        {" "}
        Cambia Saluto
      </button>
    </div>
  );
};

export default StateObject;
