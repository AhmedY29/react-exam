import React from "react";

// React Icon
import { IoMenu } from "react-icons/io5";

function SubNav() {
  return (
    <nav className="bg-[#232f3e] text-white py-1">
      <ul className="flex gap-3 text-sm lg:text-lg px-2">
        <li className="flex items-center gap-2 hover:outline-1">
          <IoMenu /> <h1>All</h1>
        </li>
        <li className="hover:outline-1 px-1">Today's Deals</li>
        <li className="hover:outline-1 px-1">Registry</li>
        <li className="hover:outline-1 px-1">Prime Video</li>
        <li className="hover:outline-1 px-1">Gift Cards</li>
        <li className="hover:outline-1 px-1">Customer Service</li>
        <li className="hover:outline-1 px-1">Sell</li>
      </ul>
    </nav>
  );
}

export default SubNav;
