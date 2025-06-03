import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { Link } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
      {products.map((product) => (
        <Link key={product.id} to={`/productDetails/${product.id}`}>
          <ProductItem
            title={product.title}
            image={product.image}
            price={product.price}
            category={product.category}
            description={product.description}
            rating={product.rating.rate}
          />
        </Link>
      ))}
    </div>
  );
}

export default Products;
