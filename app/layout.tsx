import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";



const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CakeSwirl - Artisan Cupcakes",
  description: "Delicious handcrafted cupcakes made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className}`}
      >
        {children}
      </body>
    </html>
  );
}
