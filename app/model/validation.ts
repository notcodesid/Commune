import { z } from "zod"

const signupSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email().min(2).max(30),
    password: z.string().min(5).max(20)
})

const signinSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(5).max(20)
})

export { signupSchema, signinSchema }