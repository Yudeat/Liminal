import {object ,string} from "zod";
export const signInSchema = object({
    email:string().email("Invalid email"),
    password:string().min(8,"Password must be at least 8 characters long")
})