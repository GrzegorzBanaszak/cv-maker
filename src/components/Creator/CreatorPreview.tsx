import React, { useRef } from "react";
import Type1 from "../Example/Type1";

const CreatorPreview: React.FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="a4-size bg-white">
      <Type1 />
    </div>
  );
};

export default CreatorPreview;
