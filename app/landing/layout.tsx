import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/app/globals.css';

// Import Poppins
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "AGT",
  description: "Intelligent, Interactive, Responsive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}