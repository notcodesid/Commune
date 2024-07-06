import { NextRequest, NextResponse } from "next/server";
import { signupSchema } from "@/app/model/validation";
import { z } from "zod";
import bcrypt from "bcrypt";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedData = signupSchema.parse(body);

        // Hash the Password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(validatedData.password , saltRounds)

         // Create a new object with the hashed password
         const userDataToStore = {
            ...validatedData,
            password: hashedPassword
        };
        return NextResponse.json(
            { msg: "Signup successful", data: { ...userDataToStore } }, 
            { status: 200 }
        );


    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: 'Validation failed', errors: error.errors }, { status: 400 });
        } else {
            return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
        }
    }
}