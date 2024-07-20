"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png"

export default function Register() {
  const router = useRouter();
  return (
    <div className="bg-background pt-10 pb-10">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full lg:w-1/3 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src={logo} width={200} height={200} alt="Logo" />
          </div>
          <form>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Sign up</h1>
                  <p>Welcome to the Commune.</p>
                </div>
              </div>

              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Type your name.."
                />
              </div>
              <div className="mt-5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Type your unique username"
                />
                {/* Error issue */}
                <span className="text-red-400 font-bold"></span>

              </div>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Type your email.."
                />
                {/* Error issue */}
                <span className="text-red-400 font-bold"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Type your password.."
                />
                {/* Error issue */}
                <span className="text-red-400 font-bold"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="cpassword"
                  placeholder="Confirm password.."
                />
              </div>
              <div className="mt-5">
                <Button className="w-full"> Submit</Button>
              </div>
              <div className="mt-5">
                <span>Already Have an account ? </span>
                <Link href="/login" className="text-orange-300 font-bold">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}