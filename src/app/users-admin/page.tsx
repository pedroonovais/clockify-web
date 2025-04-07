import AsideMenuUsersAdmin from "@/components/aside-menu-users-admin"
import HeaderUsersAdmin from "@/components/header-users-admin";
import { TableUsersAdmin } from "@/components/table-users-admin";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function UsersAdminPage() {
    return (
        <div className="h-screen flex">
            <AsideMenuUsersAdmin active="Gerenciar Usuários"/>

            <div className="flex-1 flex flex-col">
                <HeaderUsersAdmin userName="João Silva"/>

                <main className="flex-1 p-6 bg-white-smoke">

                    <Link href="/users-admin/form">
                        <Button className="bg-pigment-green mb-3">
                            <Plus />
                            Novo Usuário
                        </Button>
                    </Link>

                    <TableUsersAdmin />

                </main>
            </div>
        </div>
    );
}
