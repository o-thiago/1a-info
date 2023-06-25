import React, { PropsWithChildren } from "react";
import { MenuItems } from ".";

export type DrawerProps = PropsWithChildren<{
  id: string;
}>;


export const AppDrawer: React.FC<DrawerProps> = ({ id, children }) => {
  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle"></input>
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay" />
        <div className="menu bg-base-200 text-base-content p4 w-80 h-full gap-4">
          <MenuItems/>
        </div>
      </div>
    </div>
  );
};
