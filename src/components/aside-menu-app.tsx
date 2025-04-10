"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Users, BadgeCheck, ListChecks, Settings } from "lucide-react";
import clsx from "clsx";

interface AsideMenuUsersAdminProps {
  active:
    | "Gerenciar Usuários"
    | "Gerenciar Companhia"
    | "Gerenciar Perfis"
    | "Gerenciar Atividades"
    | "Configurações";
}

const links = [
  { label: "Gerenciar Companhia", href: "/admin/companies", icon: <Building2 size={20} /> },
  { label: "Gerenciar Usuários", href: "/admin", icon: <Users size={20} /> },
  { label: "Gerenciar Perfis", href: "/admin/profiles", icon: <BadgeCheck size={20} /> },
  { label: "Gerenciar Atividades", href: "/admin/activities", icon: <ListChecks size={20} /> },
  { label: "Configurações", href: "/admin/settings", icon: <Settings size={20} /> },
];

export default function AsideMenuUsersAdmin({ active }: AsideMenuUsersAdminProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={clsx(
        "relative transition-all duration-300 ease-in-out h-screen overflow-hidden text-white",
        isHovered ? "w-64" : "w-20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fundo com gradiente igual ao Hero */}
      <div className="absolute inset-0 bg-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-transparent" />
      <div className="relative z-10 p-4 flex flex-col gap-6">
        <div className="flex items-center justify-center">
          <img
            src="/logo.svg"
            alt="Logo Clockify"
            className={clsx("transition-all duration-300", isHovered ? "h-16" : "h-10")}
          />
        </div>

        <ul className="space-y-3 mx-auto">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={clsx(
                  "group flex items-center gap-4 p-2 rounded hover:bg-gray-800 transition-colors relative",
                  active === link.label && "bg-gray-800 font-semibold text-blue-400"
                )}
              >
                <span >{link.icon}</span>
                {isHovered && (
                  <span
                    className={clsx(
                      "whitespace-nowrap relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blue-400 after:w-0 group-hover:after:w-full after:transition-all after:duration-300"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </aside>
  );
}
