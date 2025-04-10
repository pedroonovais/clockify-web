import AsideMenuUsersAdmin from "@/components/aside-menu-app";
import HeaderUsersAdmin from "@/components/header-users-admin";

export default function UsersAdminCompaniesPage() {
    return (
        <div className="h-screen flex">
            <AsideMenuUsersAdmin active="Gerenciar Companhia"/>

            <div className="flex-1 flex flex-col">
                <HeaderUsersAdmin userName="João Silva"/>

                <main className="flex-1 bg-gray-900 text-gray-50 p-6">
                    <h1>Gerenciar Companhia</h1>
                </main>
            </div>
        </div>
    );
}