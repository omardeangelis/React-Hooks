import React from "react";
import { Link } from "react-router-dom";
export const Progetti = () => {
  return (
    <div>
      <Link to="progetto/1"> Progetto 1</Link>
      <Link to="progetto/2"> Progetto 2</Link>
      <Link to="progetto/3"> Progetto 3</Link>
    </div>
  );
};

export default Progetti;
