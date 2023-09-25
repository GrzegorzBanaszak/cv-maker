import React from "react";
import OpenMain from "../components/Open/OpenMain";
import OpenCv from "../components/Open/OpenCv";

const OpenPage: React.FunctionComponent = () => {
  return (
    <section className="h-screen overflow-hidden flex">
      <OpenMain />
      <OpenCv />
    </section>
  );
};

export default OpenPage;
