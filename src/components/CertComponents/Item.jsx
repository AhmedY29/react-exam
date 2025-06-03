import axios from "axios";
import React, { useEffect, useState } from "react";

function Item(props) {
  console.log(props.products, "s");
  const [product, setProduct] = useState([]);
  const [id, setId] = useState([]);
  // const [loading, setLoading] = useState([])

  useEffect(() => {
    setId(props.products?.products?.map((e) => e.productId));
  }, [props.products]);

  console.log(id);

  useEffect(() => {
    id.map(
      (e) => (
        console.log(e, "id"),
        axios
          .get(`https://fakestoreapi.com/products/${e}`)
          .then((res) => setProduct([...product, res.data]))
      )
    );
  }, []);

  console.log(product, "p");

  if (!id) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {product.map((e) => (
        <div className="">{e.title}</div>
      ))}
    </div>
  );
}

export default Item;
