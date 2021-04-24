import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  /**
   * @type {[[Object], Function]} Persone
   *
   */
  const [persone, setPersone] = useState([]);

  /**
   * @type {[Object, Function]} Persona
   *
   */
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });

  /**
   * Gestisce il submit del form
   * @param {document#event:submit} e
   * @listens document#submit
   */
  const handleSumbit = (e) => {
    e.preventDefault();
    if (persona.nome && persona.email && persona.cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...persona,
        },
      ]);
      setPersona({
        nome: "",
        email: "",
        cellulare: "",
      });
    } else {
      alert("riempi il form");
    }
  };

  /**
   * Gestisce il submit del form
   * @param {document#event:change} e
   * @listens document#change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  //Mostra le persone aggiunte con il form
  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);
  return (
    <form className="bg-white shadow rounded p-4">
      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={persona.nome}
          onChange={handleChange}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={persona.email}
          onChange={handleChange}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-3">
          Cellulare:
        </label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={persona.cellulare}
          onChange={handleChange}
          className="form-control col-9"
        ></input>
      </div>
      <button type="submit" className="btn btn-info" onClick={handleSumbit}>
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
