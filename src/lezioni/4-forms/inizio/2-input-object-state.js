import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persone, setPersone] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setPersone([
      ...persone,
      {
        id: persone.length + 1,
        nome,
        email,
        cellulare,
      },
    ]);
    setNome("");
    setEmail("");
    setCellulare("");
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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group  d-flex align-items-center justify-content-around container">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-3">
          {" "}
          Cellulare:{" "}
        </label>
        <input
          type="tel"
          id="cellulare"
          name="cellulare"
          className="form-control col-9"
          value={cellulare}
          onChange={(e) => setCellulare(e.target.value)}
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
