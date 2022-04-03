import React, { useState, useEffect } from "react";

// Shared util functions file from home project
import { getProductById, currency } from "home/products";

const PDPContent = () => {
  const id = 1;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return <div>Product {product}</div>;
};

export default PDPContent;
