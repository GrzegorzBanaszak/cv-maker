import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const CreatorAlert: React.FunctionComponent = () => {
  return (
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
  );
};

export default CreatorAlert;
