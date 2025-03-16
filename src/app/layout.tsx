import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GradientSVG",
  description: "Generate and export beautiful gradients as SVGs",
  authors: [{ name: "Will Tholke" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} antialiased flex flex-col h-screen overflow-hidden`}
      >
        <div className="flex-grow overflow-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
