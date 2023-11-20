import React from "react";
import MobileSidebar from "./mobileSidebar";

const Navbar = () => {
  return (
    <div className="p-4 border-b flex h-full items-center bg-white shadow-md">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
