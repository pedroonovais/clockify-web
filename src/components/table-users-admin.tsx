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
  
  const invoices = [
    {
      invoice: "INV-0001",
      paymentStatus: "Pago",
      paymentMethod: "Cartão de Crédito",
      totalAmount: "R$ 1.500,00",
    },
    {
      invoice: "INV-0002",
      paymentStatus: "Pendente",
      paymentMethod: "Boleto Bancário", 
      totalAmount: "R$ 2.000,00",
    },
  ]
  
  export function TableUsersAdmin() {
    const isEmpty = invoices.length === 0

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
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
                <TableCell>Total de registros: {invoices.length}</TableCell>
              </TableRow>
            </TableFooter>
          </>
        )}
      </Table>
    )
  }
  