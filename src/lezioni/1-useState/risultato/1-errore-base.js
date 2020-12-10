import React from "react";

const ErroreBase = () => {
  let titolo = "Hello world!";

  const cambiaTitolo = () => {
    titolo = "nuovo titolo";
    console.log(titolo);
  };
  return (
    <React.Fragment>
      <h2> {titolo} </h2>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        {" "}
        Change Me{" "}
      </button>
    </React.Fragment>
  );
};

export default ErroreBase;
