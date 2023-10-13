import React from "react";

const SidePagination: React.FunctionComponent = () => {
  return (
    <div className="flex items-center shadow-md">
      <span className="bg-indigo-950 text-white p-2 rounded-l-lg cursor-pointer select-none">
        ⯇
      </span>
      <span className="py-2 px-4">1</span>
      <span className="bg-indigo-950 text-white p-2 rounded-r-lg cursor-pointer select-none">
        ⯈
      </span>
    </div>
  );
};

export default SidePagination;
