import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const poppins = Poppins({weight:"600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CariKursus",
  description: "CariKursus",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/public/logo.png" sizes="any" />
      </head>
      <body className={poppins.className}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
