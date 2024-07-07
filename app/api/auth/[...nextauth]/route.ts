import { authOption } from "./option";
import NextAuth from "next-auth/next";

const nextAuth = NextAuth(authOption)

export { nextAuth as GET , nextAuth as POST}