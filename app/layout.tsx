import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AvatarProvider } from "./hooks/useAvatar";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anilu",
  description: "NextJS Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b1622] min-h-screen flex flex-col`}
      >
        <main className="flex-1">
          <Suspense fallback={null}>
            <AvatarProvider>{children}</AvatarProvider>
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
