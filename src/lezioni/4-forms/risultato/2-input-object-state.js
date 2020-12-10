import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  const [persone, setPersone] = useState([]);
  const [persona, setPersona] = useState({ nome: "", email: "", cel: "" });

  const handleSumbit = (e) => {
    e.preventDefault();
    setPersone([
      ...persone,
      {
        id: persone.length + 1,
        ...persona,
      },
    ]);
    setPersona({ nome: "", email: "", cel: "" });
  };

  const handleChange = (e) => {
    const nome = e.target.name;
    const value = e.target.value;
    setPersona({ ...persona, [nome]: value });
  };

  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);
  return (
    <form className="bg-white shadow p-4" onSubmit={(e) => handleSumbit(e)}>
      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          {" "}
          Nome:{" "}
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className="form-control col-9"
          value={persona.nome}
          onChange={handleChange}
        />
      </div>
      <div className="form-group  d-flex align-items-center justify-content-around container">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          {" "}
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control col-9"
          value={persona.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group  d-flex align-items-center justify-content-around container">
        <label htmlFor="cel" className="text-left font-weight-bold col-3">
          {" "}
          Cellulare:{" "}
        </label>
        <input
          type="tel"
          id="cel"
          name="cel"
          className="form-control col-9"
          value={persona.cel}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info ">
        {" "}
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
