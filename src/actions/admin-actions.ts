import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/admin"

export async function getUsersAdmin() {
    const response = await fetch(API_URL)
    return response.json()
}


export async function createUserAdmin(initialValue: any, formData: FormData) {

    const data = {
        idCompany: formData.get("idCompany"),
        name: formData.get("name"),
        email: formData.get("email"),
        hoursLogged: 0,
        cpf: formData.get("cpf"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        active: formData.get("active"),
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    if(!response.ok) {
        const json = await response.json()
        interface ApiError {
            field: string
            defaultMessage: string
        }
        const errors: ApiError[] = json.errors
        
        console.log(errors)

        return { 
            values: data,
            errors: { 
                idCompany: errors.find((e: ApiError) => e.field === "idCompany")?.defaultMessage, 
                name: errors.find((e: ApiError) => e.field === "name")?.defaultMessage,
                email: errors.find((e: ApiError) => e.field === "email")?.defaultMessage,
                hoursLogged: errors.find((e: ApiError) => e.field === "hoursLogged")?.defaultMessage,
                cpf: errors.find((e: ApiError) => e.field === "cpf")?.defaultMessage,
                phone: errors.find((e: ApiError) => e.field === "phone")?.defaultMessage,
                password: errors.find((e: ApiError) => e.field === "password")?.defaultMessage,
                active: errors.find((e: ApiError) => e.field === "active")?.defaultMessage,
            } 
        }
    }

    redirect("/admin")
}