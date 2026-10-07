import { Poppins, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f4d", // browser bar colour on Android Chrome / iOS Safari
};

export const metadata = {
  title: {
    default: "shri Ganesh Polymer | Engineering Polymers – PC, ABS, PBT",
    template: "%s | shri Ganesh Polymer",
  },
  description:
    "Manufacturer of PC, ABS and PBT engineering polymer granules. 5000+ MT annual capacity, ISO 9001 & 14001 certified, serving 500+ clients across India.",
    icons:{
      icon:"/logo.webp"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable} ${inter.variable}`}>
      <body className="font-display antialiased">
        <Navbar />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
