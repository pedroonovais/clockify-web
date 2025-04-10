import { LogOutIcon, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderUsersAdminProps {
  userName: string;
}

export default function HeaderUsersAdmin({ userName }: HeaderUsersAdminProps) {
  return (
    <header className="relative bg-gray-900 text-white p-4 w-full flex justify-between items-center z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-transparent pointer-events-none" />

      <p className="text-xl">Área Administrativa</p>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row items-center gap-3 hover:opacity-90 transition-opacity relative z-10">
          <span className="font-medium text-white">{userName}</span>
          <img
            className="size-10 rounded-full border border-gray-700 hover:scale-105 transition-transform"
            src="http://github.com/pedroonovais.png"
            alt="Foto de perfil"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-gray-800 border border-gray-700 text-white shadow-lg mt-2">
          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-700 cursor-pointer transition-colors">
            <User size={16} />
            <span>Perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-700 cursor-pointer transition-colors">
            <LogOutIcon size={16} />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
