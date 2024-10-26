import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import '@/app/globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Customize based on the weights you need
  });

export const metadata: Metadata = {
  title: "AGT",
  description: "Intelligent, Interactive, Responsive A.I.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
