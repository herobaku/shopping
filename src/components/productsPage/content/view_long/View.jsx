import React from "react";
import { TfiLayoutListThumb } from "react-icons/tfi";

const View = ({ onClick }) => {
  return (
    <div
      className="w-[45px] h-[45px] bg-white border rounded-sm"
      onClick={onClick}
    >
      <div className="flex items-center h-full justify-center">
        <TfiLayoutListThumb className="text-2xl text-[#292b2c]" />
      </div>
    </div>
  );
};

export default View;
