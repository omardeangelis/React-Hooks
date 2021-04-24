import React, { useState } from "react";

const StateObject = () => {
  /*
  Gestire lo state con un oggetto ci permette di descrivere
  singole entità in maniera più efficiente, soprattutto l'aggiornamento 
  dei suoi valori
  */
  // const [name,setName] = useState('dario')
  // const [age,setAge] = useState(24)
  // const [saluto,setSaluto] = useState('ciao')

  /**
   * @type {[Object, Function]} State che descrive una Persona _person
   */
  const [person, setPerson] = useState({
    name: "dario",
    age: 24,
    saluto: "Ciao",
  });

  /**
   * Funzione che modifica lo state di un oggetto
   * @return {undefined}
   */
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
