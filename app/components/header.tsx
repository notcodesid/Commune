import Image from "next/image";
import logo from "@/public/logo.png"

export default function Header() {
    return (
        <div className="pt-5 text-center flex justify-center item-center">
            <Image src={logo} alt="logo" width={20} height={20} /> 
            <p className="pl-5 font-bold text-2xl">Commune</p>
        </div>
    )
}