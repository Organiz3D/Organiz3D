import type { Metadata, Viewport } from "next";
import "./globals.css";
import { rubik } from "@/app/fonts";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
    title: "Organiz3D",
    description: "",
    applicationName: "Organiz3D",
    authors: [{ name: "Alexandre Collet" }],
    generator: null,
    keywords: null,
    referrer: "origin",
    manifest: "/site.webmanifest",
    icons: {
        "icon": "/favicon/favicon-32x32.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${rubik.variable} antialiased min-h-screen w-full sm:w-[500px] max-w-[500px] px-10 py-10 m-auto bg-base-100 text-base-content flex flex-col justify-between`}
            >
                <header>
                    <h1 className="sr-only">Organiz3d</h1>
                    <Logo
                        variant="vertical"
                        colored
                        className="w-full sm:w-[300px] max-w-[300px] mx-auto"
                    />
                </header>
                <main>{children}</main>
                <footer>
                    <p className="text-center text-sm text-base-content/50">
                        &copy; {new Date().getFullYear()} Organiz3d. All rights
                        reserved.
                    </p>
                </footer>
            </body>
        </html>
    );
}
