import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

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
        className={`${interTight.className} antialiased h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
