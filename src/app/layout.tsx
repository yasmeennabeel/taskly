import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Taskly',
  description: 'Taskly',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} light scroll-smooth`}
      data-theme="light"
      data-scroll-behavior="smooth"
    >
      <body className="light">{children}</body>
    </html>
  );
}
