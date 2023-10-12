import React from "react";
import Navbar from "../components/Navbar";
import CreatorPreview from "../components/Creator/CreatorPreview";
import { useAppSelector } from "../features/hooks";
import CreatorMain from "../components/Creator/CreatorMain";
import CreatorAlert from "../components/Creator/CreatorAlert";

const CreatorPage: React.FunctionComponent = () => {
  const exampleType = useAppSelector((state) => state.creator.exampleType);

  return (
    <>
      {exampleType !== "" ? (
        <div className="h-screen bg-main-2">
          <Navbar />
          <main className="w-full max-w-container mx-auto flex h-[calc(100%-68px)]">
            <CreatorPreview />
            <CreatorMain />
          </main>
        </div>
      ) : (
        <CreatorAlert />
      )}
    </>
  );
};

export default CreatorPage;
