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
        const errors = json.errors
        
        console.log(errors)

        return { 
            values: data,
            errors: { 
                idCompany: errors.find(e => e.field === "idCompany")?.defaultMessage, 
                name: errors.find(e => e.field === "name")?.defaultMessage,
                email: errors.find(e => e.field === "email")?.defaultMessage,
                hoursLogged: errors.find(e => e.field === "hoursLogged")?.defaultMessage,
                cpf: errors.find(e => e.field === "cpf")?.defaultMessage,
                phone: errors.find(e => e.field === "phone")?.defaultMessage,
                password: errors.find(e => e.field === "password")?.defaultMessage,
                active: errors.find(e => e.field === "active")?.defaultMessage,
            } 
        }
    }

    redirect("/admin")
}