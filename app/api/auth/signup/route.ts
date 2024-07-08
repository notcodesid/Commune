import { NextRequest, NextResponse } from "next/server";
import { signupSchema } from "@/app/model/validation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/app/db/db.config";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedData = signupSchema.parse(body);

        // check this email already exist
        const checkEmailExist = await prisma.user.findUnique({
            where : {
                email : validatedData.email
            }
        })

        if(checkEmailExist) {
            return  NextResponse.json({
                status : 400,
                message : {
                    email : "This email has already exist"
                }

            })
        }

        // Hash the Password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(validatedData.password , saltRounds)

        // insert data
        await prisma.user.create({
            data : {
                name : validatedData.name,
                email : validatedData.email,
                password : hashedPassword
            }
        })

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
            console.log(error)
            return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
        }
    }
}