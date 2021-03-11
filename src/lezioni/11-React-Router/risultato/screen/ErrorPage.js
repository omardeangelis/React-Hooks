import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const ErrorPage = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return <h1>404 pagina Non trovata</h1>;
};

export default ErrorPage;
