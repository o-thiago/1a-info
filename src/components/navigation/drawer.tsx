import React, { PropsWithChildren } from "react";
import { MenuItems } from ".";

export type DrawerProps = PropsWithChildren<{
  id: string;
}>;

export const AppDrawer: React.FC<DrawerProps> = ({ id, children }) => {
  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">{children}</div>
      <div className="drawer-side lg:hidden">
        <label htmlFor={id} className="drawer-overlay" />
        <div className="bg-base-200 text-base-content w-80 h-full lg:hidden">
          <div className="mt-20 menu bg-base-200 gap-4">
            <MenuItems />
          </div>
        </div>
      </div>
    </div>
  );
};
