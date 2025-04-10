import { getUsersAdmin } from "@/actions/admin-actions";
import AsideMenuUsersAdmin from "@/components/aside-menu-app"
import { Button } from "@/components/button";
import HeaderUsersAdmin from "@/components/header-users-admin";
import { TableUsersAdmin } from "@/components/table-users-admin";

import { Plus } from "lucide-react";
import Link from "next/link";

export default async function UsersAdminPage() {
    const data: UserAdmin[] = await getUsersAdmin();

    return (
        <div className="h-screen flex">
            <AsideMenuUsersAdmin active="Gerenciar Usuários" />

            <div className="flex-1 flex flex-col">
                <HeaderUsersAdmin userName="João Silva" />

                <main className="flex-1 bg-gray-900 text-gray-50 p-6">
                    <div className="flex gap-4">
                        <Link href="/admin/form">
                            <Button >
                                <Plus className="mr-1" />
                                Novo Usuário
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-6">
                        <TableUsersAdmin data={data} />
                    </div>
                </main>
            </div>
        </div>
    );
}
