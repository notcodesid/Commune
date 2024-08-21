import { Input } from "@/components/ui/input";
import { SearchIcon, BellIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function Navbar() {
    return (
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                <Image src={logo} alt="Commue logo"   />
            <span className="text-xl font-semibold hidden sm:inline-block">Commune</span>
          </Link>
        </div>
        <div className="flex-1 md:max-w-[39rem] px-4 md:mr-[182px] ">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input type="search" placeholder="Search" className="pl-8 w-full" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
        
        {/*  Cler auth */}
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>

        </div>
      </header>
    )
  }