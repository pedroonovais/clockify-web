import AsideMenuUsersAdmin from "@/components/aside-menu-users-admin";
import HeaderUsersAdmin from "@/components/header-users-admin";

export default function UsersAdminCompaniesPage() {
    return (
        <div className="h-screen flex">
            <AsideMenuUsersAdmin active="Gerenciar Companhia"/>

            <div className="flex-1 flex flex-col">
                <HeaderUsersAdmin userName="João Silva"/>

                <main className="flex-1 p-6 bg-white-smoke">
                    <h1>Gerenciar Companhia</h1>
                </main>
            </div>
        </div>
    );
}