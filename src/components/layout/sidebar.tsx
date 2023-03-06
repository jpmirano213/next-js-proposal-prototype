import { defaultNavItems, NavItem } from "./navItems";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import next from "next";
import { IconContext } from "react-icons";


type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
    shown: boolean;
  };
  export default function Sidebar({
    collapsed,
    navItems = defaultNavItems,
    shown,
    setCollapsed,
  }: Props) {
    const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;
    return (
      <div
        className={classNames({
          "bg-stone-700 text-zinc-50 fixed md:static md:translate-x-0 z-20":
            true,
          "transition-all duration-300 ease-in-out": true,
          "w-[300px]": !collapsed,
          "w-16": collapsed,
          "-translate-x-full": !shown,
        })}
      >
        <div
          className={classNames({
            "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
          })}
        >
          {/* logo and collapse button */}
          <div
            className={classNames({
              "flex items-center border-b border-b-stone-500 transition-none":
                true,
              "p-4 justify-between": !collapsed,
              "py-4 justify-center": collapsed,
            })}
          >
            {!collapsed &&      <Image
                src="/next.svg"
                height={100}
                width={100}
                alt="profile image"
              />}
            <button
              className="grid place-content-center hover:bg-stone-500 w-10 h-10 rounded-full opacity-0 md:opacity-100"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-grow">
            <ul
              className={classNames({
                "my-2 flex flex-col gap-2 items-stretch": true,
              })}
            >
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "text-stone-100 hover:bg-stone-500 flex": true, //colors
                      "transition-colors duration-300": true, //animation
                      "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                      "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                    })}
                  >
                    <Link href={item.href} className="flex gap-2">
                    <IconContext.Provider value={{className: 'w-6 h-6' }}> 
                    {item.icon}
                    </IconContext.Provider>
                    <span>{!collapsed && item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={classNames({
              "grid place-content-stretch p-4 ": true,
            })}
          >
            <div className="flex gap-4 items-center h-11 overflow-hidden">
              <Image
                src="/next.svg"
                height={50}
                width={50}
                alt="profile image"
                className="rounded-full"
              />
              {!collapsed && (
                <div className="flex flex-col ">
                  <span className="text-stone-50 my-0">John Doe</span>
                  <Link href="/" className="text-stone-200 text-sm">
                    View Profile
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };