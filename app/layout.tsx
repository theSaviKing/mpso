import type { Metadata } from "next";
import { Rubik_Mono_One, Rubik } from "next/font/google";
import "./globals.css";

const rubikMono = Rubik_Mono_One({
    variable: "--font-rubik-mono",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "MY POPE SAYS OPE: Get the shirt everyone's talking about!",
    description:
        "Inspired by the historic election of Pope Leo XIV as the 267th Pope of the Catholic Church, the MY POPE SAYS OPE shirt serves as a commemoration of this event for Catholics, Midwesterners, and all who think Pope Leo is a pretty cool guy. GET YOUR SHIRT TODAY!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${rubikMono.variable} ${rubik.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
