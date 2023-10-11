import React from "react";
import Navbar from "../components/Navbar";

const CreatorPage: React.FunctionComponent = () => {
  return (
    <div className="h-screen bg-main-2">
      <Navbar />
      <main className="w-full max-w-container mx-auto flex h-[calc(100%-68px)]">
        <div className="w-1/2 flex justify-center items-center">Preview</div>
        <div className="w-1/2 bg-white">Creator</div>
      </main>
    </div>
  );
};

export default CreatorPage;
