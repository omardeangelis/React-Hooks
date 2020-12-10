import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
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
