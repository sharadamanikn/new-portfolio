"use client";
import "./globals.css";
import React, { PropsWithChildren } from 'react'
import NavigationBar from "@/components/NavigationBar/NavBar";
import Footer from "@/components/Footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio- Sharadamani K N",
  description: "Personal Portfolio Website.",
  openGraph: {
    title: "Portfolio",
    description: "My Personal Portfolio Website.",
    images: [
      {
        url: "https://myportfolio-blond-omega.vercel.app/og-card.png",
        width: 1200,
        height: 628,
      },
    ],
  },
};


 const RootLayout = (props:PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <title className="text-5xl font-extrabold font-serif">{"SKN | Portfolio"}</title> 
      </head>
    <body className="bg-gray-950">
      <NavigationBar />
      {props.children}
      <Footer />
      
    </body>
  </html>
  );
};

 export default RootLayout;
