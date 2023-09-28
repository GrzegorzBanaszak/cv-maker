import React from "react";
import Navbar from "../components/Navbar";
import PatternCard from "../components/Patterns/PatternCard";

const PatternsPage: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-container mx-auto">
        <h1 className="text-center font-bold text-3xl my-3 pb-3 border-b-2 uppercase">
          Wzory
        </h1>
        <div>
          <PatternCard url="ex-cv-1" />
        </div>
      </main>
    </>
  );
};

export default PatternsPage;
