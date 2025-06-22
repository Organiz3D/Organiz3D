import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Organiz3D",
  description: "",
  applicationName: "Organiz3D",
  authors: [
    {name: "Alexandre Collet"}
  ],
  generator: null,
  keywords: null,
  referrer: "origin",
  manifest: "/site.webmanifest",
  icons: {
    "icon": "/favicon/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
