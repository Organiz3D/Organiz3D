import type { Metadata, Viewport } from "next";
import "./globals.css";
import { rubik } from "@/app/fonts";
import Logo from "@/components/Logo";
import {
    faEtsy,
    faInstagram,
    faTiktok,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import Link from "@/components/Link";

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
    const links = [
        {
            "icon": faEtsy,
            "text": "Visiter la boutique Etsy",
            "href": "https://organiz3dfrance.etsy.com",
            "isPrimary": true,
        },
        {
            "icon": faInstagram,
            "text": "Instagram",
            "href": "https://www.instagram.com/organiz3d_/",
            "isPrimary": false,
        },
    ];
    const linksPrimary = links.filter((link) => link.isPrimary);
    const linksSecondary = links.filter((link) => !link.isPrimary);
    return (
        <html lang="en">
            <body
                className={`${rubik.variable} antialiased min-h-screen w-full px-10 py-10 m-auto bg-base-100 text-base-content flex flex-col items-center justify-between`}
            >
                <header>
                    <h1 className="sr-only">Organiz3d</h1>
                    <Logo
                        variant="vertical"
                        colored
                        className="w-full sm:w-[300px] max-w-[300px] mx-auto"
                    />
                    <nav
                        aria-label="Liens vers les réseaux sociaux et la boutique"
                        className="flex justify-center mt-8"
                    >
                        <ul className="flex flex-wrap flex-col sm:w-[300px] justify-center gap-4">
                            {linksPrimary.map((link, index) => (
                                <li key={index}>
                                    <Link {...link} target="_blank" />
                                </li>
                            ))}
                            <div className="flex justify-center gap-4">
                                {linksSecondary.map((link, index) => (
                                    <li key={index}>
                                        <Link {...link} target="_blank" />
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </nav>
                </header>
                <main className="mt-8">{children}</main>
                <footer className="mt-8">
                    <p className="text-center text-sm text-base-content/50">
                        &copy; {new Date().getFullYear()} Organiz3d. All rights
                        reserved.
                    </p>
                </footer>
            </body>
        </html>
    );
}
