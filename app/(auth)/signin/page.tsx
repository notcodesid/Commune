"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png"

export default function signin () {
  const router = useRouter();
  return (
    <div className="bg-background pt-10 pb-10">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="mg:w-full w-4/5 lg:w-1/3 bg-muted p-6 rounded-lg">
          <div className="flex justify-center">
            <Image src={logo} width={200} height={200} alt="Logo" />
          </div>
          <form>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Sign in</h1>
                  <p>Welcome back to the Commune.</p>
                </div>
              </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="name">Email or Username</Label>
                <Input
                  type="text"
                  id="Email or Username"
                  placeholder="Email or Username"
                />
              </div>

              <div className="mt-5">
                <Label htmlFor="username">Password</Label>
                <Input
                  type="password"
                  id="Password"
                  placeholder=""
                />
              <div className="mt-5">
                <Button className="w-full"> Sign in</Button>
              </div>
              <div className="mt-5">
                <span>Don't have an account? </span>
                <Link href="/signup" className="text-orange-300 font-bold">
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