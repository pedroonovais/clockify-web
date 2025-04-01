## AUMENTAR UM POUCO A FONTE

## DEIXAR LINHAS DA TABELA ALTERNANDO AS CORES (BRANCO CLARO E BRANCO ESCURO)

## ADICIONAR ICONES AOS BOTOES

## COMPONENTIZAR A PAGINA

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