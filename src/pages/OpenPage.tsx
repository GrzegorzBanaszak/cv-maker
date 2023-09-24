import React from "react";
import OpenMain from "../components/Open/OpenMain";

const OpenPage: React.FunctionComponent = () => {
  return (
    <section className="h-screen overflow-hidden">
      <OpenMain />
      <section className="bg-white  w-1/2"></section>
    </section>
  );
};

export default OpenPage;
