import React, { useEffect, useState } from "react";
//useEffect viene lanciato dopo ogni re-render
//Lo use Effect ci permette di chiamare una clean up Function
//secondo paramentro
const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => {
      return oldValue + 1;
    });
  };

  useEffect(() => {
    console.log("Eccomi, sono use Effect");
    if (value > 0) {
      document.title = `Nuovo Messaggio: ${value}`;
      if (value > 1) {
        document.title = `Nuovi Messaggi: ${value}`;
      }
    }
    return () => console.log("clean up function chiamata");
  }, [value]);
  return (
    <div className="item">
      <h4>
        Value: <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
