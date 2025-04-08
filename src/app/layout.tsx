"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({
        duration: 700,
        offset: 100,
        easing: 'ease-in-out',
        once: false,
    });
  }, []);

  return (
    <html lang="pt-br">
      <head>
        <title>Clockify - Timesheet</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
