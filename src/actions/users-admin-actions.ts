const API_URL = "http://localhost:8080/users-admin"

export async function getUsersAdmin() {
    const response = await fetch(API_URL)
    return response.json()
}