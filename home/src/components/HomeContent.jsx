import React, { useState, useEffect } from "react";

import { getProducts, currency } from "../products";

const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => {
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
        </div>;
      })}
    </div>
  );
};

export default HomeContent;
