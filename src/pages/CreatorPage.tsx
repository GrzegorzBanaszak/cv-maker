import React from "react";
import Navbar from "../components/Navbar";
import CreatorPreview from "../components/Creator/CreatorPreview";
import { useAppSelector } from "../features/hooks";

import { Link } from "react-router-dom";

const CreatorPage: React.FunctionComponent = () => {
  const exampleType = useAppSelector((state) => state.creator.exampleType);

  return (
    <>
      {exampleType !== "" ? (
        <div className="h-screen bg-main-2">
          <Navbar />
          <main className="w-full max-w-container mx-auto flex h-[calc(100%-68px)]">
            <div className="w-1/2 flex justify-center items-center">
              <CreatorPreview />
            </div>
            <div className="w-1/2 bg-white">Creator</div>
          </main>
        </div>
      ) : (
        <div className="h-screen bg-main-1">
          <Navbar />
          <main className="w-full max-w-container mx-auto flex h-[calc(100%-68px)] items-center justify-center">
            <Link
              className="bg-white font-bold text-main-1 p-5 rounded-xl text-3xl  text-center shadow-lg"
              to={"/wzory"}
            >
              Aby rozpocząć kreacje wybierz wzór
            </Link>
          </main>
        </div>
      )}
    </>
  );
};

export default CreatorPage;
