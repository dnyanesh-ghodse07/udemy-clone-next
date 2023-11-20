import React from "react";

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {guestRoutes.map((route) => {
        return (
          <SidebarItem
            key={route.label}
            href={route.href}
            icon={route.icon}
            label={route.label}
          />
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
