import React from "react";
const ProductList = ({ products }) => {
  return (
    <div className='mx-auto mt-4'>
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className='card p-3 border-1 rounded-3 mb-2'
            style={{
              borderColor: "#E5e5e5",
            }}
          >
            <div className='d-flex align-items-center justify-content-center'>
              <p className='text-black mb-0'>{product.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
