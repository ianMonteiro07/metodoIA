import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Método Financeiro IA",
  description: "Organize sua vida financeira em até 30 dias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-mf-black text-mf-silver selection:bg-mf-green selection:text-black">
        {children}
      </body>
    </html>
  );
}