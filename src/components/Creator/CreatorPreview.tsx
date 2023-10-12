import React, { useRef } from "react";
import Type1 from "../Example/Type1";

const CreatorPreview: React.FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="w-1/2 flex justify-center items-center">
      <div ref={ref} className="a4-size bg-white">
        <Type1 />
      </div>
    </section>
  );
};

export default CreatorPreview;
