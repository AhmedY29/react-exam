import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../components/CertComponents/Item";

function Cert() {
  const [user, setUser] = useState("");
  const [cartsItems, setCartsItems] = useState([]);
  const [products, setProductCounts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")
      .then((res) => setCartsItems(res.data));
  }, []);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Account")));
  }, []);
  useEffect(() => {
    if (cartsItems) {
      setProductCounts(cartsItems?.find((item) => item.userId == user.id));
    }
  }, [cartsItems]);
  return (
    <section className="cert-section">
      <div className="">
        <Item products={products} />;
      </div>
    </section>
  );
}

export default Cert;
