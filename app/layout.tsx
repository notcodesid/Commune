import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ThemeTogglebtn from "@/components/common/ThemeTogglebtn";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commune",
  description: "A friendly online space for everyone to meet and talk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <ThemeTogglebtn />
        {children}
    </ThemeProvider>
      </body>
    </html>
  );
}
