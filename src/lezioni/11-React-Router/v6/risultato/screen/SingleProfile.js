import React from "react";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const params = useParams();
  console.log(params);
  return <div>{`This is the Single Profile Screen of id ${params.id}`}</div>;
};

export default SingleProfile;
