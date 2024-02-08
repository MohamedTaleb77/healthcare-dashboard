import React from "react";
import type { Metadata } from "next";
import NavBar from './Navbar/page';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Healthcare-dashboard",
  description: "Generated Mohamed Taleb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
        {children}
        </body>
    </html>
  );
}
