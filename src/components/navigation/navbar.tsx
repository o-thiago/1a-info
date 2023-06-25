import React from "react";
import { MenuItems } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export type TopBarProps = {
  drawerId: string;
};

export const TopBar: React.FC<TopBarProps> = ({ drawerId }) => {
  return (
    <div className="navbar bg-base-200 drop-shadow-lg px-4 fixed  w-full z-50">
      <div className="navbar-start">
        <label className="btn btn-ghost btn-circle avatar outline outline-offset-2 outline-1.5 outline-primary">
          <Image
            className="rounded-full"
            src="/logo.jpg"
            alt="logo"
            width={128}
            height={128}
          />
        </label>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            <MenuItems />
          </ul>
        </div>
        <div>
          <label htmlFor={drawerId} className="btn btn-ghost shadow-lg lg:hidden rounded-md drop-shadow-lg outline-primary outline-1.5 outline">
            <FontAwesomeIcon icon={faBars} width={24}/>
          </label>
        </div>
      </div>
    </div>
  );
};
