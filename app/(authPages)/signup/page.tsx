"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [authState, setAuthState] = useState<AuthStateType>({
    name : "",
    email: "",
    password: "",
  });
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter()
  const [errors , setErrors] = useState<AuthErrorType>({});

  const submitData = ( event : React.FormEvent) => {
    event.preventDefault()
    setloading(true)
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`, authState)
    .then( (res) => {
      setloading(false)

      const response= res.data;
      if(response.status == 200) {
        router.push(`/login?message=${response.message}`)
      } 
      else if(response.status == 400) {
        setErrors(response.errors)
      }

    })
    .catch( (err) => {
      setloading(false)
      console.log(err)
    })


  }





  return (
    <div className="bg-background">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full mx-2 md:w-1/3 md:mx-0 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
          </div>
          <form  >
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Sign up</h1>
                  <p>Welcome!</p>
                </div>
              </div>


              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Wick"
                  onChange={(event) =>
                    setAuthState({ ...authState, name: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">{errors?.name}</span>
              </div>

              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="John@gmail.com"
                  onChange={(event) =>
                    setAuthState({ ...authState, email: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">{errors?.email}</span>
              </div>


              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password.."
                  onChange={(event) =>
                    setAuthState({ ...authState, password: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">{errors?.password}</span>
              </div>
              <div className="mt-5">
                <Button className="w-full"  disabled={loading} onClick={submitData} >
                  { loading ? "loading..." : "Sign up"}
                </Button>
              </div>
              <div className="mt-5">
                <span>Have an account already? </span>
                <Link href="/signin" className="text-orange-300 font-bold">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}