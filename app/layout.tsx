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
  title: "Kena Driving School | Computer College & AI Training in Kenya",
  description:
    "Kena Driving School offers NTSA-approved driving lessons, computer college courses, and modern AI classes for video and image generation. Enroll today at Kena Driving School & Computer College in Kenya.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.kenadrivingschool.com",
    title: "Kena Driving School | Computer College & AI Training in Kenya",
    description:
      "Learn to drive with NTSA-certified instructors at Kena Driving School and advance your digital skills with AI classes for video generation, image generation, and computer training.",
    images: [
      {
        url: "https://www.kenadrivingschool.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "Kena Driving School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kena Driving School | Driving Lessons, Computer Courses & AI Training",
    description:
      "Kena Driving School offers driving lessons, computer college programs, and AI courses for image and video generation. Advance your skills today.",
    images: ["https://www.kenadrivingschool.com/logo2.png"],
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
