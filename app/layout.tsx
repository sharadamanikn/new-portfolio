"use client";
import "./globals.css";
import React, { PropsWithChildren } from 'react'
import NavigationBar from "@/components/NavigationBar/NavBar";
import Footer from "@/components/Footer/footer";


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
