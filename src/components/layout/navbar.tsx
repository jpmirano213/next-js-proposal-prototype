

import React from "react";
import classNames from "classnames";
type Props = {
  page: string;
  onMenuButtonClick(): void;
};

function  getDisplayRoute(page: string): string {
    switch (page) {
        case "/dashboard":
            return "Dashboard";
        default:
            return "";
    }
}
export default function Navbar(props: Props) {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="font-bold text-lg">{getDisplayRoute(props.page)}</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        {/* <Bars3Icon className="h-6 w-6" /> */}
      </button>
    </nav>
  );
};