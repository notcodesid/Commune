import { Inter } from "next/font/google";
import {
    ClerkProvider,
  } from '@clerk/nextjs'
import "../globals.css";
import Header from "../components/header";
  
  

export const metadata = {
    title: "Commune",
    description: "Social media for the user who use Github",
  };
  
  const inter = Inter({ subsets: ["latin"] });

  export default function RootLayout({
    children
} : { 
    children : React.ReactNode
}) {
    return (
        <ClerkProvider>
      <html lang="en">
        <body className={inter.className}> 
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
    )
  }