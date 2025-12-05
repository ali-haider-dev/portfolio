import type { Metadata } from "next";
import {Poppins,Open_Sans } from "next/font/google";
import "./globals.css";


 const PoppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const sansFont = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ali Haider - Portfolio",
  description: "An inspiring Software Engineer Experience in frontend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.variable} ${sansFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
