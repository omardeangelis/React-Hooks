import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("utente standard");
  const [isError, setIsError] = useState(false);

  const getDate = async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    if (response.status === 200) {
      setData(response.data);
      setIsError(false);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getDate();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: "80px", height: "80px" }}
        className="rounded-circle my-4"
      />
      <h3> {data.login}</h3>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading....</h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h2> Sorry, there is an Error</h2>
    </div>
  );
};

export default ConditionalCompining;
