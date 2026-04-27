import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafetaria Toorop | Friet & Snacks in Nijmegen",
  description: "Cafetaria Toorop in Nijmegen. Versgebakken friet, premium pizza's en de beste snacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-body bg-black text-white antialiased`}>
        <LanguageProvider>
          <OrderProvider>
            {children}
          </OrderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
