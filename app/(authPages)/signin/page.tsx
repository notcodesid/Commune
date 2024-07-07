"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Signup() {
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });

   const sumbit = () => {
    console.log(`The auth state ${authState}`)
   }




  return (
    <div className="bg-background">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full mx-2 md:w-1/3 md:mx-0 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <form >
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Sign up</h1>
                  <p>Welcome!</p>
                </div>
              </div>

              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Type your email.."
                  onChange={(event) =>
                    setAuthState({ ...authState, email: event.target.value })
                  }
                />
                {/* <span className="text-red-400 font-bold">{errors?.email}</span> */}
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Type your password.."
                  onChange={(event) =>
                    setAuthState({ ...authState, password: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">
                  {/* {errors?.password} */}
                </span>
              </div>
              <div className="mt-5">
                <Button onClick={sumbit} className="w-full"> Sign up</Button>
              </div>
              <div className="mt-5">
                <span>Don't have an account? </span>
                <Link href="/signup" className="text-orange-300 font-bold">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}