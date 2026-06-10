import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatBox from "@/components/ChatBox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://stanzinsangay-tour-and-travel.vercel.app"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ladakh tour",
    "Leh Ladakh packages",
    "Pangong lake tour",
    "Nubra valley",
    "Ladakh bike trip",
    "Ladakh travel agency",
    "OTHSAL Tour and Travel",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-stone-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ChatBox />
      </body>
    </html>
  );
}
