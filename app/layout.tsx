import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet, Tiny5 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  weight: "400",       // only available weight
  subsets: ["latin"],
  variable: "--font-tiny5",
});

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "Personal Blog of Fraser Shimmins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} ${tiny5.variable} antialiased font-handjet font-semibold`}
      >
        {children}
      </body>
    </html>
  );
}
