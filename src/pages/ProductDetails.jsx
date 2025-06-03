import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  console.log(product);
  return (
    <section className="product-details-section flex justify-center w-full">
      <div className="product-details-content flex flex-col items-center lg:flex-row gap-10 w-[90%] py-10">
        <div className="img h-50 w-50 lg:h-100 lg:w-100 overflow-hidden">
          <img className="object-cover" src={product?.image} alt="" />
        </div>
        <div className="product-info flex flex-col gap-2">
          <div className="title font-bold text-3xl">{product.title}</div>
          <div className="category p-1 px-3 rounded-lg bg-gray-100 w-fit font-bold">
            {product.category}
          </div>
          <div className="rate">
            {product?.rating?.rate} ⭐{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              {product?.rating?.count} ratings
            </span>
            <div className="text-base">
              <span className="font-bold">
                {Math.floor(Math.random() * 300)}+
              </span>{" "}
              bought in past month
            </div>
            <hr />
            <div className="price text-left w-full text-2xl font-bold">
              <h1>${product?.price}</h1>
              <h1 className="text-base font-normal text-gray-400">
                Typical:{" "}
                <span className="line-through">
                  ${Math.floor(product?.price * 1.5)}
                </span>
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl">About this item:</h1>
              <p>{product?.description}</p>
            </div>
            <button
              onClick={() => toast.success("Add Cert Successfully")}
              className="bg-[#ffd814] rounded-xl my-5 px-2 py-1 cursor-pointer"
            >
              Add to Cert
            </button>
            <div
              onClick={() => navigate("/")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              <h1>Back to List</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
