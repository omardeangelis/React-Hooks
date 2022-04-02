import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  /**
   * @type {[String, Function]} Nome
   */
  const [nome, setNome] = useState("");

  /**
   * @type {[String, Function]} Email
   */
  const [email, setEmail] = useState("");

  /**
   * @type {[String, Function]} Cellulare
   */
  const [cellulare, setCellulare] = useState("");

  /**
   * @type {[Array, Function]} Persone
   */
  const [persone, setPersone] = useState([]);

  /**
   * Gestisce il submit del form
   * @param {document#event:submit} e
   * @listens document#submit
   */
  const handleSumbit = (e) => {
    e.preventDefault();
    if (nome && email && cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          nome,
          email,
          cellulare,
        },
      ]);
      setNome("");
      setEmail("");
      setCellulare("");
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
    const { value } = e.target;
    setCellulare(value);
  };

  //Mostra in console le persone che vengono aggiunte
  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);
  return (
    <form className='bg-white shadow rounded p-4'>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='nome' className='text-left font-weight-bold col-2'>
          Nome:
        </label>
        <input
          id='nome'
          type='text'
          name='nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className='form-control'
        ></input>
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='email' className='text-left font-weight-bold col-2'>
          Email:
        </label>
        <input
          id='email'
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
        ></input>
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='cellulare' className='text-left font-weight-bold col-2'>
          Cellulare:
        </label>
        <input
          id='cellulare'
          type='tel'
          name='cellulare'
          value={cellulare}
          onChange={handleChange}
          className='form-control'
        ></input>
      </div>
      <button
        type='submit'
        className='btn btn-info mt-4'
        onClick={handleSumbit}
      >
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
