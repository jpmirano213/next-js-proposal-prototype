
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
    href: "/dashboard",
    icon: <GoDashboard />,
  },
  {
    label: "Devices",
    href: "/dashboard",
    icon: <MdOutlineDevices />,
  },
  {
    label: "History",
    href: "/dashboard",
    icon: <AiOutlineHistory />,
  },
  {
    label: "Alerts",
    href: "/dashboard",
    icon: <FiAlertTriangle />,
  }
];