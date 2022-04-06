import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className='btn btn-info' onClick={() => navigate(-2)}>
        Back
      </button>
    </div>
  );
};

export default About;
