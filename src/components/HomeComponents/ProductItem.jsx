import React from "react";

function ProductItem(props) {
  return (
    <div
      title={props.description}
      className="flex flex-col justify-around items-center relative rounded-2xl bg-white p-2  lg:w-70 h-120  h hover:scale-102 transition-all duration-200 "
    >
      <h1 className="absolute top-0 left-0 p-1 px-3 rounded-lg bg-gray-100 w-fit text-sm font-bold ">
        {props.category}
      </h1>
      <div className="img ">
        <img
          className="object-contain max-w-40 max-h-55"
          src={props.image}
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="p-2 w-full text-left">⭐{props.rating}</h1>
        <h1 className="p-2 w-full text-left">
          <span className="font-bold">{Math.floor(Math.random() * 300)}+</span>{" "}
          bought in past month
        </h1>
      </div>

      <div className="title w-full text-left text-wrap hover:text-[#c45500] ">
        <h1 className="text-balance  font-bold">{props.title}</h1>
      </div>
      <div className="price text-left w-full text-2xl font-bold">
        <h1>${props.price}</h1>
        <h1 className="text-base font-normal text-gray-400">
          Typical:{" "}
          <span className="line-through">${Math.floor(props.price * 1.5)}</span>
        </h1>
      </div>
      <button className="bg-[#ffd814] rounded-xl px-2 py-1 cursor-pointer">
        Add to Cert
      </button>
    </div>
  );
}

export default ProductItem;
