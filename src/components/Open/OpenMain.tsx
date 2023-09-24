import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const OpenMain: React.FunctionComponent = () => {
  return (
    <section className="bg-main-1 w-1/2 h-full relative">
      <div className=" h-full flex flex-col text-white justify-center items-center">
        <img className="rounded-3xl" src={logo} />
        <h1 className="uppercase font-semibold py-6 w-1/2 text-4xl text-center leading-snug border-b-4">
          złóż swoje <br /> wymarzone CV
        </h1>
        <ul className="text-center text-l font-semibold uppercase mt-2">
          <li className="my-1">Wiele szablonów do wyboru</li>
          <li className="my-1">Swobodna edycja cv</li>
          <li className="my-1">Szybka możliwość pobrania</li>
        </ul>
        <span className="mt-7 py-3 w-2/5 rounded-3xl uppercase text-center text-xl bg-white text-black font-semibold">
          <Link to={"kreator"}>Przejdź do edycji</Link>
        </span>
      </div>
      <div className="bg-main-1 open-slice"></div>
    </section>
  );
};

export default OpenMain;
