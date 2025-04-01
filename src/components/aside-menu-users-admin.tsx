import Link from "next/link";

interface AsideMenuUsersAdminProps {
    active: "Gerenciar Usuários" | "Gerenciar Companhia" | "Gerenciar Perfis" | "Gerenciar Atividades" | "Configurações";
}

export default function AsideMenuUsersAdmin(props: AsideMenuUsersAdminProps) {
    const { active } = props
    const activeClass = "font-semibold"

    const links = [
        { label: "Gerenciar Companhia", href: "/users-admin/companies" },
        { label: "Gerenciar Usuários", href: "/users-admin" },
        { label: "Gerenciar Perfis", href: "/users-admin/profiles" },
        { label: "Gerenciar Atividades", href: "/users-admin/activities" },
        { label: "Configurações", href: "/users-admin/settings" },
    ];
    
    return <aside className="w-64 bg-lapis-lazuli text-white p-6 py-1 flex flex-col">
        <nav className="space-y-4">
            <img src="/logo.svg" alt="Logo Clockify" className="h-16 w-auto"/>
            
            <ul className="gap-4">
                {links.map((link) => (
                    <li key={link.label} className="mb-3">
                        <Link href={link.href} className={active === link.label ? activeClass : ""}>
                            <p className="text-lg">
                                {link.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
}