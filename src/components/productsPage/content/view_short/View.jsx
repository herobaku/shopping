import React from "react";
import { LuLayoutGrid } from "react-icons/lu";

const View = ({ onClick }) => {
  return (
    <div
      className="w-[45px] h-[45px] bg-redLight border rounded-sm"
      onClick={onClick}
    >
      <div className="flex items-center h-full justify-center">
        <LuLayoutGrid className="text-2xl text-[#fff]" />
      </div>
    </div>
  );
};

export default View;
