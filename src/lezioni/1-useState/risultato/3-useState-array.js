import React, { useState } from "react";
import { data } from "../../../data";

//Uno state può essere anche un oggetto
const ArrayState = () => {
  /**
   * @type {[[Object], Function]} Lista Persone _ people
   */
  const [people, setPeople] = useState(data);

  /**
   * Funzione che rimuove gli elementi e aggiorna lo state _ people
   * @param {Number} id
   * @returns {undefined}
   */
  const removeItem = (id) => {
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {/* Iterazione di un array per creare JSX a partire da un Array */}
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button
              type="button"
              className="button delete-button"
              onClick={() => removeItem(id)}
            >
              {" "}
              x{" "}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
