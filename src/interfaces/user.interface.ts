import { auth } from "./auth.interface"

export interface user extends auth { 
    name: string, 
    age: number,
    phone: number
}