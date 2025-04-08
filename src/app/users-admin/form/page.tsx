"use client"
import { createUserAdmin } from "@/actions/users-admin-actions";
import AsideMenuUsersAdmin from "@/components/aside-menu-users-admin";
import HeaderUsersAdmin from "@/components/header-users-admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function UsersAdminFormPage() {

    const initialState = {
        values: {
            id: "",
            idCompany: "",
            name: "",
            email: "",
            hoursLogged: "",
            cpf: "",
            phone: "",
            password: "",
            active: true
        },
        errors: {
            id: "",
            idCompany: "",
            name: "",
            email: "",
            hoursLogged: "",
            cpf: "",
            phone: "",
            password: "",
            active: ""
        },
    }

    const[state, formAction, pending] = useActionState(createUserAdmin, initialState)
 
    return (
        <div className="h-screen flex">
            <AsideMenuUsersAdmin active="Gerenciar Usuários"/>

            <div className="flex-1 flex flex-col">
                <HeaderUsersAdmin userName="João Silva"/>

                <main className="flex-1 p-6 bg-white-smoke">
                    <h1 className=" font-bold mb-2">Cadastro novo Usuário:</h1>

                    <form action={formAction} className="flex flex-col gap-2">
                        <div>
                            <Input name="idCompany" placeholder="ID Companhia" defaultValue={state?.values.idCompany}/>
                            <span className="text-sm text-destructive">{state?.errors.idCompany}</span>
                        </div>
                        
                        <div>
                            <Input name="name" placeholder="Nome" defaultValue={state?.values.name}/>
                            <span className="text-sm text-destructive">{state?.errors.name}</span>    
                        </div>

                        <div>
                            <Input name="email" placeholder="Email" defaultValue={state?.values.email}/>
                            <span className="text-sm text-destructive">{state?.errors.email}</span>    
                        </div>

                        <div>
                            <Input name="cpf" placeholder="CPF" defaultValue={state?.values.cpf}/>
                            <span className="text-sm text-destructive">{state?.errors.cpf}</span>    
                        </div>

                        <div>
                            <Input name="phone" placeholder="Telefone" defaultValue={state?.values.phone}/>
                            <span className="text-sm text-destructive">{state?.errors.phone}</span>    
                        </div>

                        <div>
                            <Input name="password" placeholder="Senha" defaultValue={state?.values.password}/>
                            <span className="text-sm text-destructive">{state?.errors.password}</span>    
                        </div>

                        <div className="flex justify-center gap-2">
                            <Link href="/users-admin">
                                <Button className="bg-danger">
                                    <X />
                                    Cancelar
                                </Button>
                            </Link>

                            
                            <Button className="bg-pigment-green">
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
