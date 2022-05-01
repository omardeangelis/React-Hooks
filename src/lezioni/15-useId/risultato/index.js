import React, { useId } from "react";
const tempData = Array.from({ length: 5 }, (_, index) => {
  return {
    text: `Testo - ${index + 1}`,
  };
});

const Component = () => {
  const id = useId();
  return (
    <div className='mt-4'>
      <label htmlFor={id}>Hai capito use ID ?</label>
      <input
        className='input-group-text bg-white'
        id={id}
        type='checkbox'
        name='react'
      />

      <div className='mt-4'>
        {tempData.map((data) => {
          return (
            <div
              key={data.text}
              className='card rounded-3 border-1 p-2 mt-1'
              style={{
                borderColor: "#e5e5e5",
              }}
            >
              {data.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
