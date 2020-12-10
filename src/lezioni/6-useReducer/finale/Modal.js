import React from "react";

const Modal = ({ modalContent, openModal, modalState }) => {
  return (
    <section className={` modal-section ${modalState ? "show-modal" : ""}`}>
      <div className="container modal-content">
        <h4>{modalContent}</h4>
        <button
          className="button delete-button"
          onClick={() => openModal("Ciao Sono il Contenuto")}
        >
          {" "}
          x{" "}
        </button>
      </div>
    </section>
  );
};

export default Modal;
