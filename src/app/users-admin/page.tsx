export default function UsersAdmin() {
    return (
        <div className="h-screen flex">
            <aside className="w-64 bg-lapis-lazuli text-white p-6 flex flex-col">
                <h1 className="text-2xl font-bold mb-6">Clockify</h1>
                <nav className="space-y-4">
                    <a href="#" className="block font-semibold">Gerenciar Usuários</a>
                    <a href="#" className="block">Gerenciar Companhia</a>
                    <a href="#" className="block">Gerenciar Projetos</a>
                    <a href="#" className="block">Configurações</a>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex justify-between items-center bg-lapis-lazuli text-white p-4 w-full">
                    <p className="text-lg">Olá, Pedro Novais!</p>
                    <button className="bg-danger text-white px-4 py-2 rounded">Logout</button>
                </header>

                <main className="flex-1 p-6 bg-white-smoke">
                    <div className="flex justify-between items-center">
                        <button className="bg-pigment-green text-white px-4 py-2 rounded">+ Adicionar Novo</button>
                    </div>

                    <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-lapis-lazuli text-white">
                                <tr>
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Usuário</th>
                                    <th className="p-3">Companhia</th>
                                    <th className="p-3">Horas Registradas</th>
                                    <th className="p-3">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 1, nome: "João Silva", companhia: "Escritório Santos", horas: 120 },
                                    { id: 2, nome: "Maria Rodrigues", companhia: "Fiap", horas: 240 },
                                    { id: 3, nome: "Felipe Alves", companhia: "Mercedes", horas: 80 }
                                ].map((user) => (
                                    <tr key={user.id} className="border-t">
                                        <td className="p-3">{user.id}</td>
                                        <td className="p-3">{user.nome}</td>
                                        <td className="p-3">{user.companhia}</td>
                                        <td className="p-3">{user.horas}</td>
                                        <td className="p-3">
                                            <button className="bg-orange-peel text-white px-3 py-1 rounded mr-2">✏ Editar</button>
                                            <button className="bg-danger text-white px-3 py-1 rounded">🗑 Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
