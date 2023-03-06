
import React from "react";
import { GoDashboard } from "react-icons/go";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDevices } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <GoDashboard />,
  },
  {
    label: "Devices",
    href: "/",
    icon: <MdOutlineDevices />,
  },
  {
    label: "History",
    href: "/",
    icon: <AiOutlineHistory />,
  },
  {
    label: "Alerts",
    href: "/",
    icon: <FiAlertTriangle />,
  }
];