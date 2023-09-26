import React from "react";
import "../../styles/OpenCv.css";
import photo from "../../assets/cv-photo.jpg";

const OpenCv: React.FunctionComponent = () => {
  return (
    <section className="bg-white  w-1/2">
      <div className="h-full flex justify-center items-center">
        <div className="open-cv flex gap-1">
          <div className="w-1/3 h-full flex flex-col gap-2">
            <div className="border-2 row-span-2 bg-blue-950 text-white grow">
              <img
                src={photo}
                alt="Photo by Jurica Koletić on Unsplash"
                className="block rounded-full w-24 h-24 mx-auto mt-5"
              />
              <h5 className="text-center mt-4 font-semibold">Jan Kowalski</h5>
              <p className="text-center text-xs">Junior Javascript</p>
            </div>
            <div className="border-2 row-span-2 bg-blue-950 text-white p-2 grow">
              <h6 className="text-center text-xs border-b-2 border-white pb-2">
                Kontakt
              </h6>
              <ul className="text-xxs text-center pt-1">
                <li>ul. Przykładowa 123</li>
                <li>00-000 Warszawa</li>
                <li>(123) 456-7890</li>
                <li>jan.kowalski@email.com</li>
                <li>www.linkedin.com/in/jankowalski</li>
                <li>www.github.com/jankowalski</li>
              </ul>
            </div>
            <div className="border-2 row-span-3  bg-blue-950 text-white p-2 grow">
              <h6 className="text-center text-xs border-b-2 border-white pb-2">
                Umiejętności
              </h6>
              <p className="text-xxs pt-1">
                JavaScript, HTML, CSS React.js, Redux,Visual Studio Code, Git,
                npm, webpack, MongoDB, Firebase, Rozwiązywanie Problemów i
                Debugowanie, Tworzenie Responsywnych Interfejsów Użytkownika,
                Komunikatywność i Umiejętność Pracy w Zespole
              </p>
            </div>
          </div>
          <div className="w-2/3 h-full flex flex-col gap-2">
            <div className="border-2 col-span-2 py-1 px-3 shrink">
              <h4 className="border-l-4 border-blue-400 text-sm mt-1 pl-2 font-semibold">
                O Mnie
              </h4>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                Jestem młodym, ambitnym programistą JavaScript z pasją do
                tworzenia nowoczesnych aplikacji webowych. Moim celem zawodowym
                jest rozwijanie się w dziedzinie Front-End Developmentu i
                tworzenie wysokiej jakości oprogramowania, które dostarcza
                wartość użytkownikom.
              </article>
            </div>
            <div className="border-2 col-span-2 py-1 px-3 grow">
              <h4 className="border-l-4 border-blue-400 text-sm mt-1 pl-2 font-semibold">
                Wykształcenie
              </h4>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                <ul>
                  <li>
                    <b>Tytuł: Inżynier Informatyki</b>
                  </li>
                  <li>Uczelnia: Politechnika Warszawska </li>
                  <li>Okres: Wrzesień 2019 - Czerwiec 2023</li>
                </ul>
              </article>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                <ul>
                  <li>
                    <b>Tytuł: Technik Informatyk</b>
                  </li>
                  <li>
                    Szkoła Średnia: Liceum Ogólnokształcące im. Jana Nowaka
                  </li>
                  <li>Okres: Wrzesień 2015 - Czerwiec 2019</li>
                </ul>
              </article>
            </div>

            <div className="border-2 row-span-2 col-span-2 grow py-1 px-3">
              <h4 className="border-l-4 border-blue-400 text-sm mt-1 pl-2 font-semibold">
                Doświadczenie
              </h4>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                <ul>
                  <li>
                    <b>Stażysta Front-End Developer</b>
                  </li>
                  <li>Firma: WebTech Solutions, Warszawa </li>
                  <li>Okres: Maj 2022 - Sierpień 2022</li>
                </ul>
                <div className="pt-2">
                  Praca nad projektami tworzenia responsywnych interfejsów
                  użytkownikaImplementacja nowych funkcjonalności przy użyciu
                  HTML, CSS i JavaScriptTestowanie i rozwiązywanie błędów w
                  kodzieWspółpraca z zespołem programistycznym przy
                  projektowaniu i wdrażaniu aplikacji
                </div>
              </article>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                <ul>
                  <li>
                    <b>Praktykant JavaScript Developer</b>
                  </li>
                  <li>Firma: CodeMaster Labs, Kraków </li>
                  <li>Okres: Lipiec 2021 - Grudzień 2021</li>
                </ul>
                <div className="pt-2">
                  Programowanie w JavaScript, głównie przy użyciu frameworka
                  React.jsTworzenie aplikacji webowych zgodnie z wytycznymi
                  projektowymiTestowanie jednostkowe i integracyjne
                  aplikacjiUczestnictwo w codziennych spotkaniach zespołu w
                  metodyce Agile
                </div>
              </article>
            </div>

            <div className="border-2 col-span-2 row-span-2 grow py-1 px-3">
              <h4 className="border-l-4 border-blue-400 text-sm mt-1 pl-2 font-semibold">
                Doświadczenie zawodowe
              </h4>
              <article className=" border-l-4 border-blue-400 pl-2 mt-2 text-xxs leading-normal">
                <div>
                  1. Portfolio Osobiste (GitHub:
                  www.github.com/jankowalski/portfolio)
                </div>
                <div className="pt-2">
                  - Strona internetowa prezentująca moje umiejętności,
                  doświadczenie i projekty - Zaimplementowana przy użyciu
                  React.js i stylowana za pomocą CSS
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenCv;
