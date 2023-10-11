import React from "react";

const Type1: React.FunctionComponent = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-1/3 bg-blue-600">Sidebar</div>
      <div className="w-2/3">Main</div>
    </div>
  );
};

export default Type1;
