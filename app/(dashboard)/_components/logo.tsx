import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-end">
      <Image height={40} width={40} alt="logo" src="/logo.svg" />
      <h3 className="text-2xl">Kaizen</h3>
    </div>
  );
};

export default Logo;
