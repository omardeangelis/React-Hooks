import React from "react";
import { useParams, useHistory } from "react-router-dom";
const SingleProgetto = ({ history, match, location }) => {
  /*
    Location: informazioni riguardo alla composizione del nostro url
    ad esempio il percorso, i parametri dopo il ?

    match: informzioni utili una volta arrivati sulla pagina.
    utilizzo exact parameter per la Route, ed i params presenti nel nostro link

    history: ci permette di interagire con il nostro Router. 
    Tiene traccia dei link e ci permette di spostarci
    */
  console.log(history);
  console.log(match);
  console.log(location);

  const routerHistory = useHistory();
  const { id } = useParams();
  //   console.log(id);
  const forcePageChange = () => {
    //Ricorda che è una string
    //Lunghezza history
    if (Number(id) === 1 || Number(id) === 2) {
      history.push("/progetto/3");
    } else {
      routerHistory.push("/progetto/1");
    }
  };
  return (
    <div>
      {" "}
      <h4>Progetto Numero {id}</h4>
      <button className="btn btn-dark" onClick={forcePageChange}>
        Cambia Progetto
      </button>
    </div>
  );
};

export default SingleProgetto;
