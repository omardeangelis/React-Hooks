import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchComponents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;
