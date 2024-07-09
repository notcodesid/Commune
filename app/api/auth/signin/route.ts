import { NextRequest, NextResponse } from 'next/server';
import { signinSchema } from "@/app/model/validation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/app/db/db.config";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedData = signinSchema.parse(body);

        // Check if email already exists
        const checkEmailExist = await prisma.user.findUnique({
            where: {
                email: validatedData.email,
            },
        });

        if (!checkEmailExist) {
            return NextResponse.json({
                status: 400,
                error: {
                    email: "No account found with this email",
                },
            });
        }

        // Check if the password is correct
        const isPasswordSame = bcrypt.compareSync(
            validatedData.password,
            checkEmailExist.password!
        );

        if (isPasswordSame) {
            return NextResponse.json({
                status: 200,
                message: "You've logged in successfully!",
            });
        }

        return NextResponse.json({
            status: 400,
            error: {
                Password: "Password Incorrcet!",
            },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: 'Validation failed', errors: error.errors },
                { status: 400 }
            );
        } else {
            console.log(error);
            return NextResponse.json(
                { message: 'An unexpected error occurred!' },
                { status: 500 }
            );
        }
    }
}
