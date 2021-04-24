import Modal from "./Modal";
import reducer from "./reducer";
import { APRI_MODAL, CHIUDI_MODAL } from "./action";

import React, { useReducer } from "react";

/**
 * @type {Object}
 */
const intitialState = {
  //input: "User Reducer Components!",
  //isChange: false,
  modalConent: "Eccomi Sono Un Modal",
  isModalOpen: false,
};

const Index = () => {
  /**
   * @type {[Object, Function]} state
   */
  const [state, dispatch] = useReducer(reducer, intitialState);

  /**
   * Permette di modificare lo state passadogli un parametro
   * @param {String} contenuto
   */
  const tiPremo = () => {
    dispatch({ type: "PREMO_BOTTONE" });
  };

  /**
   * Funzione per Aprire Modal
   */
  const apriModal = () => {
    dispatch({ type: APRI_MODAL, payload: "il mio nuovo modal" });
  };

  /**
   * Funzione per Aprire Modal
   */
  const chiudiModal = () => {
    // dispatch({ type: "CHIUDI_MODAL" });
    dispatch({ type: CHIUDI_MODAL });
  };
  return (
    <>
      <div>
        <h3>Premi qui per aprire il Modal</h3>
        <button className="button" onClick={apriModal}>
          Mostrami
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={chiudiModal}
      />
    </>
  );
};

export default Index;
