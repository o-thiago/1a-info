import {
  IconDefinition,
  faHome,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type MenuItem = {
  name: string;
  icon: IconDefinition;
};

export const MenuItems = () => {
  const itemNames: MenuItem[] = [
    {
      name: "A turma",
      icon: faHome,
    },
    {
      name: "Nossas redes",
      icon: faUserFriends,
    },
  ];

  return (
    <>
      {itemNames.map(({ icon, name }, i) => (
        <li key={i} className="shadow-lg rounded-box text-primary">
          <a>
            <FontAwesomeIcon icon={icon} width={16} className="shadow-lg" />
            <span className="drop-shadow-lg">{name}</span>
          </a>
        </li>
      ))}
    </>
  );
};
