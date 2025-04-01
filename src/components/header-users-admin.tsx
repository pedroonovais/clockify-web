import { LogOut } from "lucide-react";

interface HeaderUsersAdminProps {
    userName: string
}

export default function HeaderUsersAdmin(props: HeaderUsersAdminProps) {
    const { userName } = props

    return <header className="flex justify-between items-center bg-lapis-lazuli text-white p-4 w-full">
        <p className="text-lg">Olá, {userName}!</p>
        <button className="bg-danger text-white px-4 py-2 rounded flex gap-2">
            <LogOut />
            Logout
        </button>
    </header>
}