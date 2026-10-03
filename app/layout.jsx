import { Poppins, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Shree Ganesh Polymer | Engineering Polymers – PC, ABS, PBT",
  description:
    "Manufacturer of PC, ABS and PBT engineering polymer granules. 5000+ MT annual capacity, ISO 9001 & 14001 certified, serving 500+ clients across India.",
    icons:{
      icon:"/logo.webp"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable} ${inter.variable}`}>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
