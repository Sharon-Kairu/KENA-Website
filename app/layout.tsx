import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Responsivenav from "./components/navigation/Responsivenav";
import Footer from "./components/footer/Footer";
import WhatsappButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenadrivingschool.com"),
  title: "Kena Driving School and Computer College",
  description:
    "Where your confidence behind the wheel and behind the computer is our top priority.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.kenadrivingschool.com",
    title: "Kena Driving School and Computer College",
    description:
      "Where your confidence behind the wheel and behind the computer is our top priority.",
    images: [
      {
        url: "https://www.kenadrivingschool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Kena Driving School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kena Driving School and Computer College",
    description:
      "Where your confidence behind the wheel and behind the computer is our top priority.",
    images: ["https://www.kenadrivingschool.com/logo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Responsivenav/>
        <main className="pt-18 lg:pt-24">
          {children}
          <WhatsappButton/>
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
