import React from "react";
import "../../styles/OpenCv.css";
import photo from "../../assets/cv-photo.jpg";

const OpenCv: React.FunctionComponent = () => {
  return (
    <section className="bg-white  w-1/2">
      <div className="h-full flex justify-center items-center">
        <div className="open-cv grid grid-cols-3 grid-rows-6 gap-2">
          <div className="border-2 row-span-2 bg-blue-950 text-white">
            <img
              src={photo}
              alt="Photo by Jurica Koletić on Unsplash"
              className="block rounded-full w-24 h-24 mx-auto mt-5"
            />
            <h5 className="text-center mt-4 font-semibold">Jan Kowalski</h5>
            <p className="text-center text-xs">Junior Javascript</p>
          </div>
          <div className="border-2 col-span-2">O mnie</div>
          <div className="border-2 col-span-2">Wykształcenie</div>
          <div className="border-2 row-span-2 bg-blue-950 text-white p-2">
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
          <div className="border-2 row-span-2 col-span-2">Doświadzczenie</div>
          <div className="border-2 row-span-3  bg-blue-950 text-white p-2">
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
          <div className="border-2 col-span-2 row-span-2">Projekty</div>
        </div>
      </div>
    </section>
  );
};

export default OpenCv;
