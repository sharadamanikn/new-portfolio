"use client";
import "./globals.css";
import React, { PropsWithChildren } from 'react'
import NavigationBar from "@/components/NavigationBar/NavBar";

 const RootLayout = (props:PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
    <body>
      <NavigationBar />
      {props.children}
      
    </body>
  </html>
  );
};

 export default RootLayout;
