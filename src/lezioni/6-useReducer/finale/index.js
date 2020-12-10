import Modal from "./Modal";
import reducer from "./reducer";
import { OPEN_CLOSE_MODAL } from "./action";

import React, { useReducer } from "react";

const intitialState = {
  //input: "User Reducer Components!",
  //isChange: false,
  modalConent: "Eccomi Sono Un Modal",
  isModalOpen: false,
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, intitialState);

  const tiPremo = (contenuto) => {
    dispatch({ type: OPEN_CLOSE_MODAL, payload: contenuto });
  };
  return (
    <>
      <div>
        <h3>Premi qui per mostrare il Modal</h3>
        <button className="button" onClick={tiPremo}>
          {" "}
          Mostrami{" "}
        </button>
      </div>

      <Modal
        modalContent={state.modalConent}
        openModal={tiPremo}
        modalState={state.isModalOpen}
      ></Modal>
    </>
  );
};

export default Index;
