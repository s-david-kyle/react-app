import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in: " + category);
    setProducts(["Clothing", "Electronics", "Books"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
