import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Page Not Found
      <button className='btn btn-success' onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
