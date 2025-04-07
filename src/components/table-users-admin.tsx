import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import { Edit, Trash } from "lucide-react"
  
  interface TableUsersAdminProps {
    data: UserAdmin[]
  }  

  export function TableUsersAdmin({data}: TableUsersAdminProps) {
    const isEmpty = data.length === 0

    return (
      <Table>
        {isEmpty && (
          <TableCaption className="text-center text-muted-foreground py-4">
            Nenhum registro cadastrado.
          </TableCaption>
        )}
  
        {!isEmpty && (
          <>
            <TableHeader className="bg-lapis-lazuli">
              <TableRow>
                <TableHead className="text-white w-[100px]">Id</TableHead>
                <TableHead className="text-white">Usuário</TableHead>
                <TableHead className="text-white">Id Companhia</TableHead>
                <TableHead className="text-white text-right">Horas Registradas</TableHead>
                <TableHead className="text-white text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.idCompany}</TableCell>
                  <TableCell className="text-right">{!user.hoursLogged ? 0 : user.hoursLogged > 0 ? user.hoursLogged : 0}</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Button className="bg-orange-peel text-white" size="sm">
                      <Edit />
                      Editar
                    </Button>
                    <Button className="bg-danger text-white" size="sm">
                      <Trash />
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total de registros: {data.length}</TableCell>
              </TableRow>
            </TableFooter>
          </>
        )}
      </Table>
    )
  }
  