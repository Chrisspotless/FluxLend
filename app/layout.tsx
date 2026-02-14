import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import ThemeToggle from "./components/ThemeToggle";
import BackToHome from "./components/BackToHome";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "NovaCheckout",
  description: "Customer-facing self-checkout platform for modern retail teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <ThemeToggle />
        <BackToHome />
      </body>
    </html>
  );
}


