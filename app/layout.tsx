"use client";
import "./globals.css";
import React, { PropsWithChildren } from 'react'
import NavigationBar from "@/components/NavigationBar/NavBar";
import Footer from "@/components/Footer/footer";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: "{Portfolio}",
  description:
    "Welcome to my portfolio! Explore my projects, skills, and experiences. Let's connect and create something amazing together.",
  openGraph: {
    title: "Portfolio",
    description:"Welcome to my portfolio! Explore my projects, skills, and experiences. ",
    images: {
      url: "https://new-portfolio-two-virid.vercel.app/og-card.png",
      width: 1200,
      height: 628,
    },
  },
};

 const RootLayout = (props:PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <title className="text-5xl font-extrabold font-serif">{"SKN | Portfolio"}</title> 
      </head>
      
    <body className="bg-gray-950 ">
      <div>
      <NavigationBar />
      {props.children}
      <Footer />
      
      </div>
    </body>
  </html>
  );
};

 export default RootLayout;
