import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const MainHero = () => {
  const instagram_ifro = "https://www.instagram.com/ifropvhcalama/";

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[6vw] text-primary font-bold drop-shadow-lg">
        A gente vai amassar
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-4 shadow-lg">
          <Image
            alt="hero"
            className="max-w-xs"
            src="/hero.jpg"
            width={256}
            height={256}
          />
          <div className="bg-base-100 rounded-box p-4">
            <h1 className="text-5-xl text-secondary font-bold">
              A melhor turma do IFRO
            </h1>
            <p>
              <span className="text-primary">Bem vindo</span> ao site do 1A de
              informática do <a href={instagram_ifro} className="text-secondary">IFRO campus calama</a>. Eu
              fiz essa página pois eu basicamente não tinha nada melhor a fazer
              nas férias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <MainHero />
      <div className="divider" />
      <div className="bg-base-100 flex flex-col lg:flex-row gap-4 p-2 rounded-box w-full items-center justify-center shadow-lg">
        <FontAwesomeIcon icon={faClock} width={128} />
        <div>
          <h1 className="font-bold text-primary">
            A gente vai se formar em 3 anos, não falta muito!
          </h1>
          <p>
            Esperamos que até lá a maioria continue com a gente... Mas é isso,
            uma hora a gente chega lá.
          </p>
        </div>
      </div>
    </>
  );
}
