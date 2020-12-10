import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const dimensioneFinestra = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
    return () => {
      window.removeEventListener("resize", dimensioneFinestra);
    };
  });
  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow p-4"
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
