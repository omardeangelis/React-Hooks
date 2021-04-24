import React, { useState } from "react";
import { data } from "../../../data";

const MainComponent = () => {
  /**
   * @type {[[Object], Function]} array contente tutte le persone
   */
  const [people, setPeople] = useState(data);

  /**
   * Rimuove Elementi dallo state e lo aggiorna
   * @param {Number} id
   * @returns {undefined}
   */
  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <div>
      <h3>Passaggio di Proprietà a cascata </h3>
      <Elenco people={people} removePeople={removePeople} />
    </div>
  );
};

const Elenco = ({ people, removePeople }) => {
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={index} {...el} removePeople={removePeople} />;
      })}
    </div>
  );
};

const Persona = ({ id, name, removePeople }) => {
  return (
    <div className="item">
      <h5> {name} </h5>
      <button className="button delete-button" onClick={() => removePeople(id)}>
        {" "}
        x{" "}
      </button>
    </div>
  );
};

export default MainComponent;
