import React from "react";
import Navbar from "../components/Navbar";
import PatternCard from "../components/Patterns/PatternCard";
import { useAppDispatch } from "../features/hooks";
import { setExampleType } from "../features/counter/creatorSlice";
import { useNavigate } from "react-router-dom";

const PatternsPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectExample = (type: string) => {
    dispatch(setExampleType(type));
    navigate("/kreator");
  };

  return (
    <>
      <Navbar />
      <main className="w-full max-w-container mx-auto">
        <h1 className="text-center font-bold text-3xl my-3 pb-3 border-b-2 uppercase">
          Wzory
        </h1>
        <section className="flex gap-2">
          <PatternCard
            clickHandler={() => selectExample("typ-1")}
            url="ex-cv-1"
          />

          <PatternCard
            clickHandler={() => selectExample("typ-2")}
            url="ex-cv-1"
          />
          <PatternCard
            clickHandler={() => selectExample("typ-3")}
            url="ex-cv-1"
          />
        </section>
      </main>
    </>
  );
};

export default PatternsPage;
