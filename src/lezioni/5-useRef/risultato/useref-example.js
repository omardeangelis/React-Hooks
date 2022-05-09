import React from "react";

const RefExample = () => {
  const ref = React.useRef(null);
  console.log(ref);

  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button className="btn btn-info" onClick={handleScroll}>
          Scroll
        </button>
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref={ref}>Testo Testo</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </>
  );
};

export default RefExample;
